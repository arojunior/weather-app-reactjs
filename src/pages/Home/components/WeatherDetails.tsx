import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { toRounded } from '../../../common/infrastructure/utils';
import styled from 'styled-components';

const CustomTypography = styled(Typography)`
  margin-right: 0.5rem;
`;

const WeatherDetails = ({ current }: any) => {
  return (
    <Grid>
      <Grid container>
        <CustomTypography variant="subtitle1">Humidity:</CustomTypography>
        <Typography variant="subtitle1">
          {toRounded(current.humidity)}%
        </Typography>
      </Grid>

      <Grid container>
        <CustomTypography variant="subtitle1">Wind:</CustomTypography>
        <Typography variant="subtitle1">
          {current.wind_speed} m/s {current.wind_deg}°
        </Typography>
      </Grid>

      <Grid container>
        <CustomTypography variant="subtitle1">Cloudiness:</CustomTypography>
        <Typography variant="subtitle1">
          {toRounded(current.clouds)}%
        </Typography>
      </Grid>

      <Grid container>
        <CustomTypography variant="subtitle1">Pressure:</CustomTypography>
        <Typography variant="subtitle1">
          {toRounded(current.pressure)}hPa
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WeatherDetails;
