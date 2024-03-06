import Axios from "axios";

const ApiKey = "Your_API_KEY";

export const getCurrentWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`;
  try {
    const responseData = await Axios.get(url);
    return responseData.data;
  } catch (e) {
    alert("error");
  }
};

export const getCurrentWeatherViaLatLong = async (lat, long) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${ApiKey}`;
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    alert("error");
  }
};

export const getForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${ApiKey}`;
  try {
    const responseData = await Axios.get(url);
    return responseData.data;
  } catch (e) {
    alert("error");
  }
};

export const getForecastWeatherViaLatLong = async (lat, long) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${ApiKey}`;
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    alert("error");
  }
};
