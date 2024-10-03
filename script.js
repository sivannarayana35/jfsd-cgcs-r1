// Login Form Validation and Redirection to Home Page
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('loginError');

    // Simulate login for any credentials
    if (email && password) {
        // Clear any previous error
        error.textContent = "";

        // Redirect to the home page (index.html) after successful login
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the home page
        return false; // Prevent form submission (since we're redirecting)
    } else {
        error.textContent = "Please enter valid credentials.";
        return false;
    }
}


// script.js
function validateRegister() {
    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation checks
    if (!name || !email || !password || !confirmPassword) {
        document.getElementById('registerError').innerText = "All fields are required.";
        return false; // Prevent form submission
    }

    if (password !== confirmPassword) {
        document.getElementById('registerError').innerText = "Passwords do not match.";
        return false; // Prevent form submission
    }

    // Here, you can also add logic to save the registration data
    // For example, sending a request to your backend server

    // If validation is successful, redirect to home page
    window.location.href = 'index.html'; // Redirect to home page
    return false; // Prevent default form submission
}


// Counseling Diary Validation
function validateDiaryEntry() {
    const date = document.getElementById('date').value;
    const entry = document.getElementById('entry').value;
    const error = document.getElementById('diaryError');

    if (date === "" || entry === "") {
        error.textContent = "All fields are required!";
        return false;
    }
    
    error.textContent = "";
    return true;
}

// Feedback Form Validation
function validateFeedback() {
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    const error = document.getElementById('feedbackError');

    if (name === "" || feedback === "") {
        error.textContent = "All fields are required!";
        return false;
    }
    
    error.textContent = "";
    return true;
}


// Background image slideshow with online images applied to body background
const images = [
    "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",  // Example from Unsplash
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",  // Example from Unsplash
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"   // Example from Unsplash
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Set initial background image when page loads
window.onload = function() {
    changeBackgroundImage();
    
    // Display login status
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('welcomeMessage').textContent = "Welcome! You are logged in.";
    }
};
