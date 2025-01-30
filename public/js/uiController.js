export const UIController = (() => {
    function init() {
        console.log("UI Initialized");

        const toggleFormBtn = document.getElementById("toggle-form-btn");
        const loginForm = document.getElementById("login-form");
        const registerForm = document.getElementById("register-form");
        const rightPanelHeading = document.getElementById("right-panel-heading");

        if (!toggleFormBtn || !loginForm || !registerForm || !rightPanelHeading) {
            console.error("One or more elements are missing from the DOM.");
            return;
        }

        toggleFormBtn.addEventListener("click", () => {
            if (registerForm.classList.contains("hidden")) {
                // Switching to Register Form
                loginForm.classList.add("hidden");
                registerForm.classList.remove("hidden");
                toggleFormBtn.textContent = "Sign In →";
            } else {
                // Switching to Login Form
                registerForm.classList.add("hidden");
                loginForm.classList.remove("hidden");
                toggleFormBtn.textContent = "Sign Up →";
            }
        });
    }

    return { init };
})();
