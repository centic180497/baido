import configureServiceStore from 'camera_redux/store';
import appReducer from 'reducers';

function getAppReducer() {
  require('../reducers');
}

export default function configureStore() {
  return configureServiceStore({}, appReducer);
}
