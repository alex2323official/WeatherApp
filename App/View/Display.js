import { ApiModel } from "../Model/ApiModel.js";

export class Display {
  #todayTemp = document.querySelector("#todayTemp");
  #todayAddress = document.querySelector("#todayAddress");
  #todayDate = document.querySelector("#todayDate");
  #todayDescription = document.querySelector("#todayDescription");
  #todayFeelsLike = document.querySelector("#todayFeelsLike");
  #todayHumidity = document.querySelector("#todayHumidity");
  #todayWindSpeed = document.querySelector("#todayWindSpeed");

  displayUi(data) {
    let correctData = JSON.parse(data);
    console.log(correctData.fullAddress);
  }
}
