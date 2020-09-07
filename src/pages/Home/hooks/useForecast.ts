import { useState, useEffect } from 'react';
import { getWetaherForecast } from '../../../services/openWeatherService';

export const useForecast = (query: string) => {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    getWetaherForecast(query).then(({ data }) => {
      setForecast(data);
    });
  }, [query]);

  return forecast;
};
