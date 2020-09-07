import React from 'react';
import HomeComponent from './HomeComponent';
import { useForecast } from './hooks/useForecast';

const HomeContainer = () => {
  const forecast = useForecast(`Berlin`);

  console.log(`forecast`, forecast);
  return <HomeComponent />;
};

export default HomeContainer;
