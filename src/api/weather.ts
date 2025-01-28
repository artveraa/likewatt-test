import { WeatherResponse } from "../utils/definitions";

export const getWeather = async (
  lat: number,
  lon: number,
  APIKEY: number
): Promise<WeatherResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=fr&appid=${APIKEY}&units=metric`
  );
  const data: WeatherResponse = await response.json();
  return data;
};
