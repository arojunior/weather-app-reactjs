import { useState, useEffect } from 'react';
import { getWetaherForecast } from '../../../services/openWeatherService';
import { berlinResponse } from '../../../common/infrastructure/mockedResponses';

export const useForecast = (query: string) => {
  const [forecast, setForecast] = useState(berlinResponse);

  useEffect(() => {
    getWetaherForecast(query)
      .then(({ data }) => {
        setForecast(data);
      })
      .catch((error) => {
        console.log(`Error getting forecast`, error);
      });
  }, [query]);

  return forecast;
};
