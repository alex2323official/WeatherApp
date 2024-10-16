import { ApiModel } from "../Model/ApiModel";
import { Display } from "../View/Display";

export class MainController {
  #inputCity = document.querySelector("#inputCity");
  #inputCityBtn = document.querySelector("#inputCityBtn");

  listenForCityInput() {
    this.#inputCityBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let inputCityValue = this.#inputCity.value;

      // callWeatherApi() from Model
      if (inputCityValue !== "") {
        const apiModel = new ApiModel();
        let recivedData = apiModel.fetchApiCall(inputCityValue);
        console.log(recivedData);
        recivedData.then((result) => {
          console.log(result);
        });
      }
    });
  }
}
