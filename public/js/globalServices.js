export const GlobalServices = (() => {
  function showMessage(message, type = "success") {
    const container = document.querySelector(".container");
    if (!container) {
      console.error("Container element not found.");
      return;
    }

    const messageBox = document.createElement("div");
    messageBox.className = `message-box ${type}`;
    messageBox.textContent = message;
    container.appendChild(messageBox);

    setTimeout(() => {
      messageBox.classList.add("show");
    }, 100); // Slight delay to trigger the CSS transition

    setTimeout(() => {
      messageBox.classList.remove("show");
      messageBox.classList.add("hide");
    }, 3000);

    // Remove after the hide transition
    setTimeout(() => {
      messageBox.remove();
    }, 3500); // Adjust to match the CSS transition duration
  }

  return { showMessage };
})();
