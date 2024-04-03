import React, { useEffect, useState } from "react";
import { getForecast } from "../utils/Apicall";
import Card from "../Component/Card.jsx";

function HourlyForecast(props) {
  const { ForecastData } = props;
  const [index, setIndex] = useState([]);

  useEffect(() => {
    const indices = [];
    for (let i = 0; i < ForecastData.list.length; i++) {
      if (
        ForecastData.list[i].dt_txt.toString().split(" ")[0] ===
        new Date().toISOString().slice(0, 10)
      ) {
        indices.push(ForecastData.list[i]);
      }
    }
    setIndex(indices);
  }, [ForecastData]);
  const calculateTime = (baseTime, index) => {
    const newTime = new Date(baseTime);
    newTime.setHours(newTime.getHours() + index * 3);
    return newTime.toLocaleTimeString();
  };
  return (
    <>
      <h1 className="text-slate-700 font-bold">Hourly Forecast</h1>
      <div className="flex gap-x-2 overflow-x-auto max-w-[100vw]">
        {index.map((value, ind) => {
          return (
            <div key={ind}>
              <Card
                temperature={value.main.temp}
                WeatherDescription={value.weather[0].description}
                icon={value.weather[0].icon}
                time={calculateTime(new Date(), ind)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HourlyForecast;
