import React from 'react';
import HomeComponent from './HomeComponent';
import { useForecast } from './hooks/useForecast';
import { useGeolocation } from './hooks/useGeolocation';

const HomeContainer = () => {
  const position = useGeolocation();
  const forecast = useForecast(position);
  
  return <HomeComponent forecast={forecast} position={position} />;
};

export default HomeContainer;
