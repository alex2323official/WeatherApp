export class ApiModel {
  callWeatherApi(city) {
    console.log(city);
    this.fetchApiCall(city);
  }

  async fetchApiCall(city) {
    // Call Visual Crossing API
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=2U5JV7AQJVKUV3U8J2AQS4934&contentType=json`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
}
