import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { takeFirst, toCelcius } from '../../../common/infrastructure/utils';
import { getIconByWeather } from '../../../common/infrastructure/icons';

const CurrentWeather = ({ current }: any) => {
  const { main: mainCondition } = takeFirst(current.weather[0]) || {};

  return (
    <Grid>
      <Typography variant="h5">{toCelcius(current.temp)}°</Typography>
      <img src={getIconByWeather(mainCondition)} alt={mainCondition} />      
    </Grid>
  );
};

export default CurrentWeather;
