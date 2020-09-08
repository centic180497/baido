import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

import * as WebSocketActions from 'actions/websocket_actions';

export default class LoggedIn extends React.Component {
  componentDidMount() {
    // WebSocketActions.initialize()
  }

  componentWillUnmount() {}

  render() {
    return this.props.children;
  }
}
