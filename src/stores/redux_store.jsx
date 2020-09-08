import configureStore from 'store';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

export default store;
