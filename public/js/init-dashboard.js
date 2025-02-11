import { AuthServices } from "./authServicesjs";
import { GlobalServices } from "./globalServices.js";

document.addEventListener("DOMContentLoaded", () => {
  AuthServices.init();
  GlobalServices.init();
});
