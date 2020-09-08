import { useState, useEffect } from 'react';
import { getWetaherForecast } from '../../../services/openWeatherService';

export const useForecast = ({ latitude, longitude }: any) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      getWetaherForecast({ latitude, longitude })
        .then(({ data }) => {
          setForecast(data);
        })
        .catch((error) => {
          console.log(`Error getting forecast`, error);
        });
    }
  }, [latitude, longitude]);

  return forecast;
};
