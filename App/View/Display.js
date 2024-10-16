import { ApiModel } from "../Model/ApiModel.js";

export class Display {
  #todayTemp = document.querySelector("#todayTemp");
  #todayAddress = document.querySelector("#todayAddress");
  #todayDate = document.querySelector("#todayDate");
  #todayDescription = document.querySelector("#todayDescription");
  #todayFeelsLike = document.querySelector("#todayFeelsLikeTemp");
  #todayHumidity = document.querySelector("#todayHumidity");
  #todayWindSpeed = document.querySelector("#todayWindSpeed");

  #inputCelcius = document.querySelector("#switchUnits");

  displayUi(data) {
    let correctData = JSON.parse(data);
    let unit = "";
    let todayTemp = correctData.currentTemp;
    let todayFeels = correctData.feelsLikeTemp;

    if (this.#inputCelcius.checked) {
      console.log("celcius");
      unit = "℃";
    } else {
      console.log("fahrenheit");
      unit = "℉";
      todayTemp = (todayTemp * 9) / 5 + 32;
      todayTemp = Math.floor(todayTemp * 100) / 100;
      todayFeels = (todayTemp * 9) / 5 + 32;
      todayFeels = Math.floor(todayFeels * 100) / 100;
    }
    this.#todayTemp.textContent = `Temperature: ${todayTemp} ${unit}`;
    this.#todayAddress.textContent = correctData.fullAddress;
    this.#todayDate.textContent = correctData.currentDate;
    this.#todayDescription.textContent = correctData.description;
    this.#todayFeelsLike.textContent = `Feels like temperature: ${todayFeels} ${unit}`;
    this.#todayHumidity.textContent = `Humidity: ${correctData.humidity}`;
    this.#todayWindSpeed.textContent = `Wind Speed: ${correctData.windSpeed} km/h`;
  }
}
