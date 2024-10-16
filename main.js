import "./style.css";
import { MainController } from "./App/Controller/MainController.js";

// App starts here
const mainController = new MainController();
mainController.listenForCityInput();
