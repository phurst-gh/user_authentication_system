import { APIService } from "./apiService.js";

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    // Handle Register Form Submission
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await APIService.register(name, email, password);
            alert("Registration successful! Please log in.");
        } catch (error) {
            alert(error.message || "Registration failed.");
        }
    });

    // Handle Login Form Submission
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        try {
            const response = await APIService.login(email, password);
            alert("Login successful! Redirecting...");
            window.location.href = "/dashboard.html"; // Redirect after login
        } catch (error) {
        }
    });
});
