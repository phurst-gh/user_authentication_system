import { Authentication } from "./api/authentication.js";
import { GlobalServices } from "./globalServices.js";

export const AuthServices = (() => {
  function validateRegisterForm(name, email, password) {
    const errors = {};

    if (!name.trim()) errors.name = "Name is required.";
    if (!email.trim()) errors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      errors.email = "Enter a valid email.";

    if (password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = "Password must contain at least one special character.";
    }

    return errors;
  }

  async function handleRegister(event) {
    event.preventDefault();

    console.log("Registering...");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const validationErrors = validateRegisterForm(name, email, password);
    if (Object.keys(validationErrors).length > 0) {
      console.log("Registering...validationErrors");
      GlobalServices.showMessage(
        Object.values(validationErrors).join("\n"),
        "error"
      );
      return;
    }

    try {
      console.log("Registering...try");
      await Authentication.register(name, email, password);
      GlobalServices.showMessage(
        "Registration successful! Please log in.",
        "success"
      );
    } catch (error) {
      console.log("Registering...catch");
      GlobalServices.showMessage(error.message, "error");
    }
  }

  async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    try {
      await Authentication.login(email, password);
      GlobalServices.showMessage("Login successful! Redirecting...", "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    } catch (error) {
      GlobalServices.showMessage(error.message, "error");
    }
  }

  async function handleLogout() {
    console.log("Handling Logging out...");
    try {
      await Authentication.logout();
      GlobalServices.showMessage(
        "Logout successful! Redirecting...",
        "success"
      );
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } catch (error) {
      GlobalServices.showMessage("Logout failed. Please try again.", "error");
    }
  }

  function init() {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const logoutButton = document.getElementById("logout-btn");

    console.log("AuthController initialized");

    if (registerForm) {
      registerForm.addEventListener("submit", handleRegister);
    }

    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }

    if (logoutButton) {
      logoutButton.addEventListener("click", handleLogout);
    }
  }

  return { init };
})();
