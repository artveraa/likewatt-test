import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import { WeatherResponse, WeatherType } from "../utils/definitions";

const Weather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [showAllDays, setShowAllDays] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      (async () => {
        const data = await getWeather(
          latitude,
          longitude,
          import.meta.env.VITE_WEATHER_API_KEY
        );
        setWeather(data);
      })();
    }
  }, [latitude, longitude]);

  const groupByDate = (list: WeatherType[]) => {
    return list.reduce((acc, day) => {
      const date = new Date(day.dt_txt).toLocaleDateString("fr-FR", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      acc[date] = acc[date] || [];
      acc[date].push(day);
      return acc;
    }, {} as Record<string, WeatherType[]>);
  };

  const groupedWeather = weather ? groupByDate(weather.list) : {};
  const dates = Object.keys(groupedWeather);

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="pb-5 text-xl font-semibold text-center">
        🌤 Météo à {weather?.city.name} 🌍
      </h2>

      <div className="flex flex-col gap-5">
        {dates.slice(0, showAllDays ? dates.length : 1).map((date, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-700 text-center">
              {date}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {groupedWeather[date].map((day, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 border rounded-lg bg-gray-50 shadow-sm"
                >
                  <p className="text-lg font-semibold">
                    {new Date(day.dt_txt).toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                    className="w-12 h-12"
                  />
                  <p className="text-gray-600 text-sm uppercase text-center">
                    {day.weather[0].description}
                  </p>
                  <p className="text-gray-800 font-medium">{day.main.temp}°C</p>
                  <p className="text-gray-500 text-xs">
                    (ressenti : {day.main.feels_like}°C)
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {dates.length > 1 && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowAllDays(!showAllDays)}
            className="bg-main text-white font-semibold px-5 py-2 rounded-lg hover:bg-dark transition-all"
          >
            {showAllDays
              ? "Voir uniquement aujourd'hui"
              : "Voir les prochains jours"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;
