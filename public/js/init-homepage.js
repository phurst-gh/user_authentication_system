import { Homepage } from "./homepage.js";
import { AuthServices } from "./authServicesjs";
import { GlobalServices } from "./globalServices.js";

document.addEventListener("DOMContentLoaded", () => {
  Homepage.init();
  AuthServices.init();
  GlobalServices.init();
});
