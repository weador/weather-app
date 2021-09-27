import axios from 'axios';

const apiKey = '050ea8eeff01ce7c98b35732e9ac8e10';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeatherByCityName = async (cityName, lang) => {
  try {
    const result = await axios.get(`/?q=${cityName}&units=metric&appid=${apiKey}&lang=${lang}`);
    return result.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
  
};
