import { ApiModel } from "../Model/ApiModel.js";

export class Display {
  #todayTemp = document.querySelector("#todayTemp");
  #todayAddress = document.querySelector("#todayAddress");
  #todayDate = document.querySelector("#todayDate");
  #todayDescription = document.querySelector("#todayDescription");
  #todayFeelsLike = document.querySelector("#todayFeelsLikeTemp");
  #todayHumidity = document.querySelector("#todayHumidity");
  #todayWindSpeed = document.querySelector("#todayWindSpeed");

  displayUi(data) {
    let correctData = JSON.parse(data);
    console.log(correctData);

    this.#todayTemp.textContent = correctData.currentTemp;
    this.#todayAddress.textContent = correctData.fullAddress;
    this.#todayDate.textContent = correctData.currentDate;
    this.#todayDescription.textContent = correctData.description;
    this.#todayFeelsLike.textContent = correctData.feelsLikeTemp;
    this.#todayHumidity.textContent = correctData.humidity;
    this.#todayWindSpeed.textContent = correctData.windSpeed;
  }
}
