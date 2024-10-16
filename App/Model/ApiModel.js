export class ApiModel {
  static ApiData = {};

  async fetchApiCall(city) {
    // Call Visual Crossing API
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=2U5JV7AQJVKUV3U8J2AQS4934&contentType=json`
      );
      const data = await response.json();

      // Make Object with needed data
      let dataForDisplay = {
        fullAddress: data.resolvedAddress,
        description: data.days[0].conditions,
        currentDate: data.days[0].datetime,
        currentTemp: data.days[0].temp,
        feelsLikeTemp: data.days[0].feelslike,
        humidity: data.days[0].humidity,
        windSpeed: data.days[0].windspeed,
      };

      //   console.table(dataForDisplay);
      return dataForDisplay;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
}
