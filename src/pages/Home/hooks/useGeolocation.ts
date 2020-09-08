import { useState, useEffect } from 'react';
import axios from 'axios';

const getAddressByLatLong = (coords: any) => {
  return axios.get(
    `https://nominatim.openstreetmap.org/reverse.php?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
  );
};

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

export const useGeolocation = (settings = defaultSettings) => {
  const [position, setPosition] = useState({});
  
  useEffect(() => {
    const { geolocation } = navigator;

    const onSuccess = ({ coords, timestamp }: any) => {
      if (coords.latitude && coords.longitude) {
        getAddressByLatLong(coords).then(({ data }) => {
          setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            address: data.address,
            timestamp,
          });
        });
      }
    };

    const onError = (err: any) => {
      console.log(`error getting location`, err);
    };

    if (!geolocation) {
      return;
    }

    geolocation.getCurrentPosition(onSuccess, onError, settings);
  }, [navigator.geolocation]);

  return position;
};
