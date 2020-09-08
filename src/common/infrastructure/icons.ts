import thunderstorm from '../../assets/images/thunderstorm.png';
import drizzle from '../../assets/images/drizzle.png';
import rain from '../../assets/images/rain.png';
import snow from '../../assets/images/snow.png';
import atmosphere from '../../assets/images/atmosphere.png';
import clear from '../../assets/images/clear.png';
import clouds from '../../assets/images/cloudy.png';
import extreme from '../../assets/images/extreme.png';
import defaultIcon from '../../assets/images/partly-cloudy.png';

export const getIconByWeather = (mainCondition: string) => {
  const icons: any = {
    Thunderstorm: thunderstorm,
    Drizzle: drizzle,
    Rain: rain,
    Snow: snow,
    Atmosphere: atmosphere,
    Clear: clear,
    Clouds: clouds,
    Extreme: extreme,
  };

  return icons[mainCondition] || defaultIcon;
};
