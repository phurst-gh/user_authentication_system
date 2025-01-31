import { UIController } from "./uiController.js";
// import { APIService } from "./apiService.js";

document.addEventListener("DOMContentLoaded", () => {
    UIController.init();

    // const loginForm = document.getElementById("login-form");
    // const registerForm = document.getElementById("register-form");

    // loginForm.addEventListener("submit", async (event) => {
    //     event.preventDefault();
    //     const email = document.getElementById("login-email").value;
    //     const password = document.getElementById("login-password").value;

    //     try {
    //         const response = await APIService.login(email, password);
    //         UIController.showMessage("Login successful! Redirecting...", "success");
    //         setTimeout(() => {
    //             window.location.href = "dashboard.html"; // Redirect after login
    //         }, 2000);
    //     } catch (error) {
    //         UIController.showMessage("Invalid credentials. Try again.", "error");
    //     }
    // });

    // registerForm.addEventListener("submit", async (event) => {
    //     event.preventDefault();
    //     const name = document.getElementById("name").value;
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;

    //     try {
    //         await APIService.register(name, email, password);
    //         UIController.showMessage("Registration successful! Please log in.", "success");
    //     } catch (error) {
    //         UIController.showMessage("Registration failed. Try again.", "error");
    //     }
    // });
});
