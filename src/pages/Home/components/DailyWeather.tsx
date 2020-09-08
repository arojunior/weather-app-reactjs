import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getIconByWeather } from '../../../common/infrastructure/icons';
import { toCelcius, toDate, takeFirst, WEEKDAYS } from '../../../common/infrastructure/utils';

const DailyWeather = ({ day }: any) => {
  const date = toDate(day.dt);  
  const { main: mainCondition } = takeFirst(day.weather) || {};
  const weatherIcon = getIconByWeather(mainCondition);
  
  return (
    <Grid item xs={6} sm={1}>
      <Typography variant="h6">{WEEKDAYS[date.getDay()]}</Typography>
      <img src={weatherIcon} alt="WeatherIcon" height="64" width="64" />
      <Typography variant="h6">{toCelcius(day.temp.min)}° {toCelcius(day.temp.max)}°</Typography>
    </Grid>
  );
}
export default DailyWeather;
