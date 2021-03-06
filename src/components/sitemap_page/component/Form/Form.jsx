import React, { useState } from 'react';
import {
  CardActionArea,
  CardMedia,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Tooltip,
  Dialog,
  Button,
  Grid,
  Card,
  Paper,
  Tabs,
  Tab,
  Typography,
  CardContent,
  IconButton,
  TextField,
  Fab,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon, CheckBox as CheckBoxIcon } from '@material-ui/icons';
// import FormAdd from "components/sitemap_page/component/Form/Form";
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import Form from './component/form/Form';
const ContentTypes = {
  ANGULAR: 'ANGULAR',
  REACT: 'REACT',
  JQUERY: 'JQUERY',
  VUE: 'VUE',
};
const mockData = {
  id: 1234,
  name: 'Test',
  description: 'Description',
  contentTypes: ['ANGULAR', 'REACT'],
};
function FormAddPage(props) {
  const contentTypeKeys = Object.keys(ContentTypes);

  const { register, handleSubmit, errors, control } = useForm();

  const isNameError = errors.name && errors.name.type === 'required';
  const nameErrorText = isNameError ? 'Name is required' : '';

  const isDescriptionError = errors.description && errors.description.type === 'required';
  const descriptionErrorText = isDescriptionError ? 'Description is required' : '';

  const onSubmit = handleSubmit((updatedData) => console.log(updatedData));
  const classes = useStyles();
  const [citys, setcitys] = useState([{ id: 1, name: 'Thanh pho Da Nang' }]);
  const [districts, setdistricts] = useState([
    { id: 1, name: 'Quan Hai Chau' },
    { id: 2, name: 'Quan Cam Le' },
    { id: 3, name: 'Quan Ngu Hanh Son' },
  ])
  // useEffect(() => {
  //   props.isSeachcam(props.political);
  //   props.Province();
  // }, []);
  const city = [{ id: 1, name: 'Thanh pho Da Nang' }];

  return (
    <div className={classes.wrapGrid}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.listmenu}>
            <Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="disabled tabs example">
              <Tab className={classes.customTab} label="Thêm Mới" />
            </Tabs>
          </Paper>
        </Grid>

        <Grid className={classes.paper} item xs={12}>
          <div>
            <form onSubmit={onSubmit} autoComplete="off">
              <TextField
                fullWidth
                disabled
                label="Id"
                name="id"
                variant="outlined"
                inputRef={register()}
                className={classes.formInput}
              />
              <TextField
                autoFocus
                fullWidth
                type="text"
                label="Slot Definition Name"
                name="name"
                variant="outlined"
                helperText={nameErrorText}
                error={isNameError}
                inputRef={register({ required: true })}
                className={classes.formInput}
              />
              <TextField
                fullWidth
                type="text"
                label="Slot Definition Description"
                name="description"
                variant="outlined"
                helperText={descriptionErrorText}
                error={isDescriptionError}
                inputRef={register({ required: true })}
                className={classes.formInput}
              />
              <Autocomplete
                multiple
                id="tags-outlined"
                options={citys}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
               
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="single"
                    label="Combo box - Single"
                    variant="outlined"
                    fullWidth
                    placeholder="Favorites"
                    inputRef={register}
                  />
                )}
              />
               <Autocomplete
                    // multiple
                id="tags-outlined"
                options={districts}
                getOptionLabel={(option) => option.name}
                noOptionsText={'Không có lựa chọn'}
                disableCloseOnSelect
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="distric"
                    label="Combo box - Single"
                    variant="outlined"
                    fullWidth
                    inputRef={register}
                  />
                )}
              />

              {/* <Autocomplete
                    multiple
                    size="small"
                    options={
                      // options.province_list.length > 0 ? options.province_list : []
                      city
                    }
                    getOptionLabel={(option) => option.name}
                    noOptionsText={'Không có lựa chọn'}
                    // disableCloseOnSelect
                    value={props.searchCam}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="single"
                        label="Tỉnh/Thành phố"
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{
                          classes: {
                            root: classes.labelRoot,
                          },
                        }}
                      />
                    )}
                    // onChange={(e, value) => onChange('province_list', e, value)}
                  />                  */}
              {/* <input type="submit" /> */}
               <Button type="submit" variant="outlined" color="primary">
                Save
              </Button> 
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormAddPage;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    zIndex: 3,
    boxShadow: '5px 0 5px -5px #333',
    height: '100%',
    position: 'relative',
  },
  listmenu: {
    width: '100%',
  },
  paper: {
    color: theme.palette.text.secondary,
    height: '100%',
  },
  listCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  bground: {
    backgroundColor: '#e0e0e0',
  },
  customCard: {
    padding: 0,
    margin: '0 15px',
    '&:last-child': {
      padding: 0,
    },
  },
  size: {
    fontSize: 16,
  },
  sizeitem: {
    fontSize: '14px',
  },
  map: {
    height: '100%',
    position: 'relative',
  },
  wrapGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'start',
    height: '100%',
  },
  bground: {
    backgroundColor: '#e0e0e0',
  },
  blacklist: {
    marginTop: '3px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  fab: {
    position: 'absolute',
    bottom: 3,
    right: 8,
  },
  iconeditbuton: {
    padding: '0',
  },
  icondeletebuton: {
    padding: '0',
  },
  listblck: {
    flexGrow: 1,
    zIndex: '9999',
    left: '101%',
    boxShadow: '5px 0 5px -5px #333',
    height: '100%',
    position: 'absolute',
    background: '#ffffff',
    top: '0',
  },
  link: {
    textDecoration: 'none',
  },
  setitem: {
    // marginLeft: '16px',
  },
  iconedit: {
    fontSize: '15px',
    padding: 0,
  },
  icondelete: {
    fontSize: '15px',
    padding: 0,
    // marginLeft: '8px',
  },
  color: {
    color: 'red',
  },
  formadd: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  setheight: {
    height: '100%',
  },
  scroll: {},
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
  },
  listCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  siteMap: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  infoCamera: {
    width: 320,
    padding: 10,
  },
  title: {
    fontSize: 14,
    paddingLeft: '6px',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    justifyContent: 'flex-start',
  },
  media: {
    height: 70,
    width: 70,
  },
  textInfo: {
    marginLeft: 10,
  },
  tooltip: {
    padding: 5,
    marginRight: 5,
  },
  logtitle: {
    margin: '0',
    padding: '8px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 100px)',
  },
  logblack: {
    fontSize: '1.25rem',
    fontFamily: 'Roboto, Helvetica, Arial, sanSerif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    margin: '6px',
  },
  Form: {
    width: '500px',
    marginLeft: '500px',
    marginTop: '50px',
  },
}));
