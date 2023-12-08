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
}

document.addEventListener('DOMContentLoaded', fetchUsers);
