import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AirQuality = () => {
  const [aqiData, setAqiData] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);

  const convertToFahrenheit = (temperature) => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(
          `https://api.airvisual.com/v2/nearest_city?key=9b8cfc61-19af-4524-8647-70e8f8fe70f6`
        );


        const { data } = response.data;
        const { current } = data;



        setAqiData(current.pollution.aqius);
        setTemperature(current.weather.tp);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {aqiData && (
        <div className="sm:my-4 text-lg sm:text-2xl  leading-snug text-center">
          <div className="text-slate-700 font-light">Air Quality Index</div><div className="text-orange-400 font-bold">{aqiData} AQI</div>
          <div className="text-slate-700 font-light">
            Temperature</div><div className="text-orange-400 font-bold"> {temperature}°C ({convertToFahrenheit(temperature)}°F)</div>
        </div>
      )}
    </div>
  );
};

export default AirQuality;
