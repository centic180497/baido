import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import 'assets/sass/styles.scss'

import store from 'stores/redux_store';
import { browserHistory } from 'utils/browser_history';
import theme from 'themes';

import Root from 'components/root';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={browserHistory}>
          <Route path="/" component={Root} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default hot(App);
