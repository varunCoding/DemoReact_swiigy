// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// const store = createStore(
//   reducers,

//   applyMiddleware(thunk)

// )

// export default store;


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './src/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware

  )
);

export default store;