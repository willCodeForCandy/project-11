import sunny from '../../public/assets/002-sunny.png';
import scatteredClouds from '../../public/assets/003-cloudy.png';
import cloudy from '../../public/assets/004-cloudy-1.png';
import sunnyDrizzle from '../../public/assets/010-rain.png';
import heavyDrizzle from '../../public/assets/rain.png';
import rain from '../../public/assets/006-rainy.png';
import freezingRain from '../../public/assets/011-snow-1.png';
import snow from '../../public/assets/005-snow.png';
import storm from '../../public/assets/007-storm.png';
import thunder from '../../public/assets/008-thunder.png';
import clearNight from '../../public/assets/013-full-moon.png';
import cloudyNight from '../../public/assets/022-moon.png';

export const weatherIcons = [
  {
    icon: sunny,
    codes: [800, '01d'],
  },
  {
    icon: scatteredClouds,
    codes: [801, 802, '02d', '03d'],
  },
  {
    icon: cloudy,
    codes: [803, 804, '04d', '04n'],
  },
  {
    icon: sunnyDrizzle,
    codes: [300, 301, 310, 321, 500, 521, '10d'],
  },
  {
    icon: heavyDrizzle,
    codes: [302, 311, 312, 313, 314, 502, 503, 504, 522, 531, '09d', '09n'],
  },
  {
    icon: rain,
    codes: [501],
  },
  {
    icon: freezingRain,
    codes: [511, 611, 612, 613, 615, 616],
  },
  {
    icon: snow,
    codes: [600, 601, 602, 620, 621, 622],
  },
  {
    icon: storm,
    codes: [200, 201, 202, 230, 231, 232],
  },
  {
    icon: thunder,
    codes: [210, 211, 212, 221, '11d', '11n'],
  },
  {
    icon: clearNight,
    codes: [800, '01n'],
    nightTime: true,
  },
  {
    icon: cloudyNight,
    codes: [801, 802, '02n', '03n'],
    nightTime: true,
  },
];
