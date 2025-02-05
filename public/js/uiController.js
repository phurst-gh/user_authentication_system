export const UIController = (() => {
  function toggleForms() {
    const toggleFormBtns = document.querySelectorAll(".toggle-form-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (!toggleFormBtns.length || !loginForm || !registerForm) {
      console.error("One or more elements are missing from the DOM.");
      return;
    }

    console.log('toggleFormBtns', toggleFormBtns);

    toggleFormBtns.forEach((button) => {
      button.addEventListener("click", () => {
        registerForm.classList.toggle("hidden");
        loginForm.classList.toggle("hidden");

        button.textContent = registerForm.classList.contains("hidden") ? "Sign In →" : "Sign Up →";
      });
    });
  }

  function showMessage(message, type = "success") {
    const messageBox = document.createElement("div");
    messageBox.className = `message-box ${type}`;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);

    setTimeout(() => {
      messageBox.remove();
    }, 3000);
  }

  function init() {
    toggleForms();
  }

  return { init, showMessage };
})();
