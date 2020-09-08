import React from 'react';
import ReactDOM from 'react-dom';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import HomeContainer from './pages/Home/HomeContainer';

const theme = responsiveFontSizes(createMuiTheme());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HomeContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
