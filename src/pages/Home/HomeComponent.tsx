import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import HeaderComponent from '../../common/components/HeaderComponent';
import WeatherCard from './components/WeatherCard';

interface Props {
  forecast: any;
  position: any;
}

const HomeComponent = ({ forecast, position }: Props) => (
  <Grid>
    <HeaderComponent />
    <Grid>
      {forecast ? (
        <WeatherCard forecast={forecast} position={position} />
      ) : (
        <CircularProgress />
      )}
    </Grid>
  </Grid>
);

export default HomeComponent;
