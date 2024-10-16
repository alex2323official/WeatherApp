import { ApiModel } from "../Model/ApiModel";
import { Display } from "../View/Display";

export class MainController {
  #inputCity = document.querySelector("#inputCity");
  #inputCityBtn = document.querySelector("#inputCityBtn");

  listenForCityInput() {
    this.#inputCityBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const display = new Display();

      let inputCityValue = this.#inputCity.value;

      // callWeatherApi() from Model
      if (inputCityValue !== "") {
        const apiModel = new ApiModel();
        let recivedData = apiModel.fetchApiCall(inputCityValue);
        // Store result in variable and pass it to Display (View)
        recivedData.then((result) => {
          let cleanResult = JSON.stringify(result);
          display.displayUi(cleanResult);
        });
      }
    });
  }
}
