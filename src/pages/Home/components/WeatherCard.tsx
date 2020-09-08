import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import CurrentWeather from './CurrentWeather';
import WeatherDetails from './WeatherDetails';
import WeeklyWeather from './WeeklyWeather';
import { takeFirst, toDate } from '../../../common/infrastructure/utils';

const CustomCard = styled(Card)`
  min-width: 275px;
  margin-bottom: 16px;
`;

const CurrentWheaterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WeatherCard = ({ forecast, position }: any) => {
  const today = toDate(forecast.current.dt);
  const { description } = takeFirst(forecast.current.weather);

  return (
    <CustomCard>
      <CardContent>
        <Typography variant="h6">
          {position?.address?.city} - {position?.address?.country}
        </Typography>
        <Typography variant="subtitle1">{today.toDateString()}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <CurrentWheaterWrapper>
          <CurrentWeather current={forecast.current} />
          <WeatherDetails current={forecast.current} />
        </CurrentWheaterWrapper>
        <Grid>
          <WeeklyWeather daily={forecast.daily} />
        </Grid>
      </CardContent>
    </CustomCard>
  );
};

export default WeatherCard;
