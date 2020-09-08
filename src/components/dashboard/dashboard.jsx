import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import * as WebSocketActions from 'actions/websocket_actions';
import LoggedInRoute from 'components/logged_in_route';
import DashboardLayout from 'components/dashboard_layout';

import Sitemap from 'components/sitemap_page';

const styles = {
  root: {
    height: '100vh',
  },
};

const SitemapPage = () => (
  <DashboardLayout>
    <DashboardLayout title="BẢN ĐỒ CAMERA">
      <Sitemap />
    </DashboardLayout>
  </DashboardLayout>
);

class Dashboard extends React.Component {
  componentDidMount() {
    WebSocketActions.initialize();
  }

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;

    return (
      <div id="dashboard" className={classes.root}>
        <LoggedInRoute path={`${this.props.match.url}/sitemap`}>
          <DashboardLayout title="BẢN ĐỒ CAMERA">
            <Sitemap />
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${this.props.match.url}/followed_list`}>
          <DashboardLayout title="DANH SÁCH THEO DÕI">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${this.props.match.url}/search_vehicles`}>
          <DashboardLayout title="TÌM KIẾM PHƯƠNG TIỆN">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${this.props.match.url}/blacklist`}>
          <DashboardLayout title="DANH SÁCH ĐEN">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${this.props.match.url}/violations`}>
          <DashboardLayout title="VI PHẠM">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${this.props.match.url}/record_videos`}>
          <DashboardLayout title="XEM LẠI">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <LoggedInRoute path={`${this.props.match.url}/flow`}>
          <DashboardLayout title="LƯU LƯỢNG">
            <div>FOLLOWLIST</div>
          </DashboardLayout>
        </LoggedInRoute>
        <Redirect to={`${this.props.match.url}/sitemap`} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
