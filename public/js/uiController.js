// UIController.js - Handles UI interactions and animations
export const UIController = (() => {
  // Select DOM elements for form toggling
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");
  const formTitle = document.getElementById("form-title");
  const welcomeText = document.getElementById("welcome-text");
  const toggleFormBtn = document.getElementById("toggle-form-btn");

  let isLoginFormVisible = false; // Track current form visibility

  // Toggle between Register and Login forms with animations
  function toggleForms() {
      if (!isLoginFormVisible) {
          fadeOut(registerForm, () => {
              registerForm.classList.add("hidden");
              loginForm.classList.remove("hidden");
              formTitle.textContent = "Sign In to Your Account";
              welcomeText.innerHTML = "“Knowledge is power, but wisdom is the application of knowledge.”";
              toggleFormBtn.textContent = "Back to Register";
              fadeIn(loginForm);
          });
      } else {
          fadeOut(loginForm, () => {
              loginForm.classList.add("hidden");
              registerForm.classList.remove("hidden");
              formTitle.textContent = "Create your account";
              welcomeText.innerHTML = "Hello, <br> welcome to user_auth_system!";
              toggleFormBtn.textContent = "SIGN IN →";
              fadeIn(registerForm);
          });
      }
      isLoginFormVisible = !isLoginFormVisible;
  }

  function fadeOut(element, callback) {
      element.style.opacity = "0";
      setTimeout(() => {
          callback();
      }, 400);
  }
  
  function fadeIn(element) {
      element.style.opacity = "0";
      setTimeout(() => {
          element.style.opacity = "1";
      }, 100);
  }

  // Initialize event listeners on page load
  function init() {
      toggleFormBtn.addEventListener("click", (event) => {
          event.preventDefault();
          toggleForms();
      });
  }

  return { init };
})();
