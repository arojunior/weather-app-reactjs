import React from 'react';
import Grid from '@material-ui/core/Grid';
import DailyWeather from './DailyWeather';

const WeeklyWeather = ({ daily }: any) => {
  const days = daily.slice(1).map((day: any) => <DailyWeather day={day} key={day.dt} />);

  return (
    <Grid container spacing={4}>
      {days}
    </Grid>
  );
};

export default WeeklyWeather;
