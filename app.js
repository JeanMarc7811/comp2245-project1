// Project 1: write your form validation in this file.


console.log("JavaScript is running");

// Get the form
const form = document.getElementById("signup-form");

// Get the form fields
const nameField = form.elements.namedItem("name");
const emailField = form.elements.namedItem("email");
const frequencyField = form.elements.namedItem("frequency");

// Get error paragraphs
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const frequencyError = document.getElementById("frequency-error");

// Get success message
const formMessage = document.getElementById("form-message");

// Listen for form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear previous success message
    formMessage.textContent = "";
    formMessage.classList.remove("success");

    // Get trimmed values
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const frequency = frequencyField.value.trim();

    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = [];

    // Validate name
    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameField.setAttribute("aria-invalid", "true");
        errors.push(nameField);
    } else {
        nameError.textContent = "";
        nameField.removeAttribute("aria-invalid");
    }

    // Validate email
    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailField.setAttribute("aria-invalid", "true");
        errors.push(emailField);
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailField.setAttribute("aria-invalid", "true");
        errors.push(emailField);
    } else {
        emailError.textContent = "";
        emailField.removeAttribute("aria-invalid");
    }

    // Validate frequency
    if (frequency === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencyField.setAttribute("aria-invalid", "true");
        errors.push(frequencyField);
    } else {
        frequencyError.textContent = "";
        frequencyField.removeAttribute("aria-invalid");
    }

    // Focus on the first field with an error
    if (errors.length > 0) {
        errors[0].focus();
        return;
    }

    // Display thank-you message
    formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;
    formMessage.classList.add("success");

    // Reset the form
    form.reset();
});
