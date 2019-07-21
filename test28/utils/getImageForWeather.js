/* eslint-disable global-require */

const images = {
  Clear: require('../assets/images/weather/clear.png'),
  Hail: require('../assets/images/weather/hail.png'),
  'Heavy Cloud': require('../assets/images/weather/heavy-cloud.png'),
  'Light Cloud': require('../assets/images/weather/light-cloud.png'),
  'Heavy Rain': require('../assets/images/weather/heavy-rain.png'),
  'Light Rain': require('../assets/images/weather/light-rain.png'),
  Showers: require('../assets/images/weather/showers.png'),
  Sleet: require('../assets/images/weather/sleet.png'),
  Snow: require('../assets/images/weather/snow.png'),
  Thunder: require('../assets/images/weather/thunder.png'),
};

export default weather => images[weather];
