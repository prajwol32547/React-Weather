import React from "react";

function Card(props) {
  const { temperature, WeatherDescription, icon } = props;

  return (
    <div className="w-[10rem] shrink-0 h-[10rem] border border-slate-700 rounded-xl p-2 bg-orange-400/30">
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather Icon"
        width={80}
        className="mr-2"
      />
      <p className="text-slate-700">Temp:{temperature}</p>
      <p className="text-slate-700">{WeatherDescription}</p>
    </div>
  );
}

export default Card;
