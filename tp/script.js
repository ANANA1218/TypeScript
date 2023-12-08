function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) { return response.json(); })
        .then(function (users) {
        var userListElement = document.getElementById('userList');
        if (userListElement) {
            users.forEach(function (user) {
                var listItem = document.createElement('li');
                listItem.textContent = "".concat(user.name, " - ").concat(user.email);
                var userPosts = document.createElement('ul');
                listItem.appendChild(userPosts);
                fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(user.id))
                    .then(function (response) { return response.json(); })
                    .then(function (posts) {
                    posts.forEach(function (post) {
                        var postItem = document.createElement('li');
                        postItem.textContent = post.title;
                        userPosts.appendChild(postItem);
                    });
                })
                    .catch(function (error) {
                    console.error("Erreur lors de la r\u00E9cup\u00E9ration des posts de l'utilisateur ".concat(user.name, ":"), error);
                });
                userListElement.appendChild(listItem);
            });
        }
    })
        .catch(function (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
    });
    var userSearchInput = document.getElementById('userSearch');
    userSearchInput.addEventListener('input', function () {
        var searchTerm = userSearchInput.value.toLowerCase();
        var userItems = document.querySelectorAll('#userList > li');
        userItems.forEach(function (userItem) {
            var userName = userItem.textContent.toLowerCase();
            if (userName.includes(searchTerm)) {
                userItem.style.display = 'block';
            }
            else {
                userItem.style.display = 'none';
            }
        });
    });
    var postSearchInput = document.getElementById('postSearch');
    postSearchInput.addEventListener('input', function () {
        var searchTerm = postSearchInput.value.toLowerCase();
        var postItems = document.querySelectorAll('#userList li ul li');
        postItems.forEach(function (postItem) {
            var postTitle = postItem.textContent.toLowerCase();
            if (postTitle.includes(searchTerm)) {
                postItem.style.display = 'block';
            }
            else {
                postItem.style.display = 'none';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', fetchUsers);
