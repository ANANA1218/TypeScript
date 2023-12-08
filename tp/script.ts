function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            const userListElement = document.getElementById('userList');
            if (userListElement) {
                users.forEach((user: any) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${user.name} - ${user.email}`;

                    const userPosts = document.createElement('ul');
                    listItem.appendChild(userPosts);

                    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                        .then((response) => response.json())
                        .then((posts) => {
                            posts.forEach((post: any) => {
                                const postItem = document.createElement('li');
                                postItem.textContent = post.title;
                                userPosts.appendChild(postItem);
                            });
                        })
                        .catch((error) => {
                            console.error(`Erreur lors de la récupération des posts de l'utilisateur ${user.name}:`, error);
                        });

                    userListElement.appendChild(listItem);
                });
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des utilisateurs :', error);
        });

   
    const userSearchInput = document.getElementById('userSearch') as HTMLInputElement;
    userSearchInput.addEventListener('input', function() {
        const searchTerm = userSearchInput.value.toLowerCase();

        const userItems = document.querySelectorAll('#userList > li');

        userItems.forEach((userItem: any) => {
            const userName = userItem.textContent.toLowerCase();

            if (userName.includes(searchTerm)) {
                userItem.style.display = 'block';
            } else {
                userItem.style.display = 'none';
            }
        });
    });

   
    const postSearchInput = document.getElementById('postSearch') as HTMLInputElement;
    postSearchInput.addEventListener('input', function() {
        const searchTerm = postSearchInput.value.toLowerCase();

        const postItems = document.querySelectorAll('#userList li ul li');

        postItems.forEach((postItem: any) => {
            const postTitle = postItem.textContent.toLowerCase();

            if (postTitle.includes(searchTerm)) {
                postItem.style.display = 'block';
            } else {
                postItem.style.display = 'none';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', fetchUsers);
