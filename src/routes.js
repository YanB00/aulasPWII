import express from "express";
import userController from "./controllers/usercontroller.js"
import director from "./services/directorcontroller.js";

const routes = express();
routes.use("/user", userController);
routes.use("/director", directorController);

export default routes;
