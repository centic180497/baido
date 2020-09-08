import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DashboardHeader from 'components/dashboard_header';
import DashboardSidebar from 'components/dashboard_sidebar';

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  content: { width: '100%' },
};

class DashboardLayout extends React.Component {
  render() {
    const { classes, title } = this.props;

    return (
      <div className={classes.root}>
        <DashboardHeader title={title} />
        <div className={classes.dashboard}>
          <DashboardSidebar />
          <div className={classes.content}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardLayout);
