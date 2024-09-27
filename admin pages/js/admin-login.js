document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Simple authentication simulation
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin-dashboard.html';  // Redirect to admin dashboard
    } else {
        alert('Invalid username or password.');
    }
});
