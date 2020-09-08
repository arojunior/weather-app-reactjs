import httpService from './httpService';

export const getWetaherForecast = ({ latitude, longitude }: any) => {
  if (!latitude || !longitude) {
    return Promise.reject(Error(`Latitude and Longitude are required`));
  }
  return httpService.get(`/onecall`, {
    params: {
      lat: latitude,
      lon: longitude,
      exclude: `hourly,minutely`,
      appid: process.env.REACT_APP_API_KEY,
    },
  });
};
