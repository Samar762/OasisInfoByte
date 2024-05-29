document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const users = [];

    // Handle registration
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            
            // Check if user already exists
            if (users.find(user => user.username === username)) {
                alert('User already exists!');
                return;
            }

            users.push({ username, password });
            alert('User registered successfully!');
            registerForm.reset();
        });
    }

    // Handle login
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert('Login successful!');
                window.location.href = 'secured.html';
            } else {
                alert('Invalid username or password!');
            }
        });
    }
});
