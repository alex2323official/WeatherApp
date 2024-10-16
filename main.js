import "./style.css";
import { MainController } from "./App/Controller/MainController.js";
import { ApiModel } from "./App/Model/ApiModel.js";

// App starts here
const mainController = new MainController();
mainController.listenForCityInput();
