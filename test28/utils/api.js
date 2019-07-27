import { Platform } from 'react-native';

const server = Platform.select({
  web: 'http://localhost:3000',
  default: 'https://www.metaweather.com'
});

export const fetchLocationId = async city => {
  const response = await fetch(
    `${server}/api/location/search/?query=${city}`,
  );
  const locations = await response.json();
  return locations[0].woeid;
};

export const fetchWeather = async woeid => {
  const response = await fetch(
    `${server}/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};

const server2 = Platform.select({
  web: 'http://localhost:3001',
  default: 'https://unsplash.it'
});

export const fetchImages = async () => {
  const response = await fetch(`${server2}/list`);
  const images = await response.json();

  return images;
};

export const getImageFromId = id =>
  `${server2}/${600}/${600}?image=${id}`;
