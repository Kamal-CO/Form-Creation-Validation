// TASK: Form Validation with Basic JavaScript
// Implement client-side validation for registration form using string methods and conditional logic
document.addEventListener('DOMContentLoaded', function() {
    // TASK: Form and Feedback Element Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // TASK: Form Submission Event Listener with Prevention
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // TASK: Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // TASK: Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // TASK: Username Validation - must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // TASK: Email Validation - must contain @ and . characters
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain both "@" and "." characters.');
        }

        // TASK: Password Validation - must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // TASK: Feedback Display Logic
        feedbackDiv.style.display = "block";

        if (isValid) {
            // Success case - all validations passed
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            // Error case - display validation failures
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});