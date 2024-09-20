document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple check
    if (username === 'admin' && password === 'password') {
        alert('Login Successful');
    } else {
        alert('Login Failed');
    }
});
