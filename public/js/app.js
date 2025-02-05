import { UIController } from "./uiController.js";
import { authController } from "./authController.js";
import { APIService } from "./apiService.js";

document.addEventListener("DOMContentLoaded", () => {
  UIController.init();
  authController.init();
  APIService.init();
});
