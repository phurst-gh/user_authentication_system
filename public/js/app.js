import { UIController } from "./uiController.js";
// import { APIService } from "./apiService.js";
// import { AuthManager } from "./authManager.js";

document.addEventListener("DOMContentLoaded", () => {
    UIController.init();

    // const loginForm = document.getElementById("login-form");

    // // Handle login form submission
    // loginForm.addEventListener("submit", async (event) => {
    //     event.preventDefault();

    //     const email = document.getElementById("login-email").value;
    //     const password = document.getElementById("login-password").value;

    //     try {
    //         const response = await APIService.login(email, password); // Send login request
    //         AuthManager.saveUserSession(response.user); // Save user session
    //         alert(response.message || "Login successful!");
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // });
});
