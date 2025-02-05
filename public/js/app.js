import { UIController } from "./uiController.js";
import { AuthController } from "./authController.js";

document.addEventListener("DOMContentLoaded", () => {
  UIController.init();
  AuthController.init();
});
