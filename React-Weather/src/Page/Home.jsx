import { React, useState } from "react";
import {
  getCurrentWeather,
  getCurrentWeatherViaLatLong,
  getForecast,
  getForecastWeatherViaLatLong,
} from "../utils/Apicall";
import CurrentWeather from "../Component/CurrentWeather";
import HourlyForecast from "../Component/HourlyForecast";
function Home() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [Forecast, setForecast] = useState("");

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCurrentWeatherViaLatLong(latitude, longitude)
            .then((data) => {
              setCurrentWeather(data);
              setCity(data.name);
            })
            .catch((error) => console.log("Error fetching weather:", error));
          getForecastWeatherViaLatLong(latitude, longitude)
            .then((data) => setForecast(data))
            .catch((e) => console.log(e));
        },
        (error) => {
          console.log("error", error.message);
        }
      );
    } else {
      console.log("not support");
    }
  };
  const enteredLocation = () => {
    getCurrentWeather(city)
      .then((data) => setCurrentWeather(data))
      .catch((error) => console.log("Error fetching weather:", error));
    getForecast(city)
      .then((data) => setForecast(data))
      .catch((e) => console.log(e));
  };
  return (
    <div className="grid grid-row-3 py-2 justify-center place-items-center h-[100vh] bg-orange-400/70 max-w-[100vw]">
      <div className="flex items-center border-2 border-slate-700 rounded-xl bg-orange-400/30 rounded-md p-4 h-[60px]">
        <input
          type="search"
          placeholder="Enter City"
          onChange={(e) => setCity(e.target.value)}
          className="flex-shrink-0  px-1 rounded-lg h-[30px]"
        />
        <button className="ml-2 flex-shrink-0" onClick={enteredLocation}>
          <i className="text-slate-700 fa fa-search"></i>
        </button>
        <button className="ml-4 flex-shrink-0" onClick={getLocation}>
          <i className="text-slate-700 fa fa-map-marker"></i>
        </button>
      </div>
      {currentWeather !== "" && currentWeather !== undefined && (
        <CurrentWeather weatherData={currentWeather} />
      )}

      {Forecast !== "" && Forecast !== undefined && (
        <HourlyForecast ForecastData={Forecast} />
      )}
    </div>
  );
}

export default Home;
