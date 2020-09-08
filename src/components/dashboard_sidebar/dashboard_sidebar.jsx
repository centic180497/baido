import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Button, Tooltip } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = {
  root: {
    width: 60,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)',
  },
  top: {
    flexGrow: 1,
  },
  bottom: {
    flexGrow: 0,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    padding: '2px 4px',
  },
  button: {
    width: '100%',
    minWidth: '100%',
    justifyContent: 'center',
    padding: '10px 12px',
  },
  active: {
    color: indigo[700],
    borderLeft: `4px solid ${indigo[700]}`,
    paddingLeft: 6,
  },
  icon: {
    color: 'inherit',
    width: 24,
    height: 24,
    display: 'flex',
  },
};

const pages = [
  {
    icon: <MapOutlinedIcon style={{ fontSize: 24 }} />,
    title: 'Bản đồ',
    href: 'sitemap',
  },
  {
    icon: <AppsOutlinedIcon style={{ fontSize: 24 }} />,
    title: 'Danh sách theo dõi',
    href: 'followed_list',
  },
  {
    icon: <SearchIcon style={{ fontSize: 24 }} />,
    title: 'Tìm kiếm phương tiện',
    href: 'search_vehicles',
  },
  {
    icon: <EventNoteIcon style={{ fontSize: 24 }} />,
    title: 'Vi phạm',
    href: 'violations',
  },
  {
    icon: <VideoLibraryIcon style={{ fontSize: 24 }} />,
    title: 'Xem lại',
    href: 'record_videos',
  },
  {
    icon: <MapOutlinedIcon style={{ fontSize: 24 }} />,
    title: 'Lưu lượng',
    href: 'flow',
  },
];

const CustomRouterLink = React.forwardRef((props, ref) => <RouterLink ref={ref} {...props} />);

class DashboardSidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      openExtendMenu: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.top}>
          <Scrollbars style={{ height: '100%' }}>
            <List>
              {pages.map((page, index) => (
                <ListItem key={index} className={classes.listItem}>
                  <Tooltip title={page.title} placement="right" arrow>
                    <Button
                      activeClassName={classes.active}
                      className={classes.button}
                      component={CustomRouterLink}
                      to={`/dashboard/${page.href}`}
                    >
                      <div className={classes.icon}>{page.icon}</div>
                    </Button>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Scrollbars>
        </div>
        <div className={classes.bottom}>
          <div className={classes.listItem}>
            <Button className={classes.button}>
              <SettingsOutlinedIcon />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardSidebar);
