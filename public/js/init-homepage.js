import { Homepage } from "./homepage.js";
import { AuthServices } from "./authServices.js";

document.addEventListener("DOMContentLoaded", () => {
  Homepage.init();
  AuthServices.init();
});
