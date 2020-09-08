import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  margin-bottom: 1.8rem;
`;

const HeaderComponent = () => {
  return (
    <MainWrapper>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </MainWrapper>
  );
};

export default HeaderComponent;
