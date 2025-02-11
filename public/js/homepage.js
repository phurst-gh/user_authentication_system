export const Homepage = (() => {
  function toggleForms() {
    const toggleFormBtns = document.querySelectorAll(".toggle-form-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (!toggleFormBtns.length || !loginForm || !registerForm) {
      console.error("One or more elements are missing from the DOM.");
      return;
    }

    toggleFormBtns.forEach((button) => {
      button.addEventListener("click", () => {
        registerForm.classList.toggle("hidden");
        loginForm.classList.toggle("hidden");

        button.textContent = registerForm.classList.contains("hidden") ? "Sign In →" : "Sign Up →";
      });
    });
  }

  function init() {
    toggleForms();
  }

  return { init };
})();
