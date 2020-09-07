import httpService from './httpService';

export const getWetaherForecast = (query: string) =>
  httpService.get(`/forecast/daily`, {
    params: {
      q: query,
      appid: process.env.REACT_APP_API_KEY,
      units: `metrics`,
      cnt: 8, // number of days returned (from 1 to 16)
    },
  });
