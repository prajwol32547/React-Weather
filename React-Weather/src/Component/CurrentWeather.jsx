import { React, useState } from "react";

function CurrentWeather(props) {
  const { weatherData } = props;

  return (
    <div className="mt-5 p-5 ">
      <div className="flex justify-center gap-x-2">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt="Weather Icon"
          width={80}
          className="mr-2"
        />

        <span className="text-5xl mt-3">{weatherData.main.temp}</span>
        <span className="font-bold text-2xl mt-3">&deg; C</span>
      </div>

      <br />
      <div className="flex justify-center gap-x-10">
        <div>
          <p className="text-slate-700">{weatherData.weather[0].description}</p>
          <p className="text-slate-700">
            {weatherData.name},{weatherData.sys.country}
          </p>
        </div>
        <div>
          <p className="text-slate-700">Wind Speed:{weatherData.wind.speed}</p>
          <p className="text-slate-700">
            Visibility:{weatherData.visibility}km
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
