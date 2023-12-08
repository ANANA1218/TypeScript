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
}
document.addEventListener('DOMContentLoaded', fetchUsers);
