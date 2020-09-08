import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider, AppBar, Grid, IconButton, Tooltip, Badge, Avatar } from '@material-ui/core';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

import CenticLogo from 'assets/images/centic_logo.png';

const styles = {
  root: {
    height: 50,
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    color: 'inherit'
  },
  logoWrapper: {
    height: '100%'
  },
  logoImg: {
    height: '100%',
    padding: 10
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px'
  },
  rightNav: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    marginLeft: 'auto'
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  }
};

class DashboardHeader extends React.Component {
  render() {
    const { classes, title } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <div className={classes.logoWrapper}>
            <img src={CenticLogo} className={classes.logoImg} width={127} height={50}/>
          </div>
          <Divider orientation="vertical" />
          <div className={classes.titleWrapper}>
            <Typography>{title}</Typography>
          </div>
          <div className={classes.rightNav}>
            <Grid container>
              <Tooltip title="Thông báo" arrow placeholder="bottom" PopperProps={{disablePortal: true}}>
                <IconButton>
                  <Badge badgeContent={4} color="primary" max={999} variant="dot">
                    <NotificationsOutlinedIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Tooltip>
              <div className={classes.user}>
                <Avatar src="https://material-ui.com/static/images/avatar/2.jpg"/>
              </div>
            </Grid>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardHeader);
