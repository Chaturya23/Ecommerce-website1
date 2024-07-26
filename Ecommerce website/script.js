document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'index.html'; // Redirect to home page
});
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'login.html'; // Redirect to home page
});
