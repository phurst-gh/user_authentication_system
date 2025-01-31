export const UIController = (() => {
  function init() {
    console.log("UI Initialized");

    const toggleFormBtns = document.querySelectorAll(".toggle-form-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (!toggleFormBtns || !loginForm || !registerForm) {
      console.error("One or more elements are missing from the DOM.");
      return;
    }

    toggleFormBtns.forEach(button => {
      button.addEventListener("click", () => {
        registerForm.classList.toggle('hidden');
        loginForm.classList.toggle('hidden');

        if (registerForm.classList.contains("hidden")) {
          // Switching to Register Form
          button.textContent = "Sign In →";
        } else {
          // Switching to Login Form
          button.textContent = "Sign Up →";
        }
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

  return { init, showMessage };
})();
