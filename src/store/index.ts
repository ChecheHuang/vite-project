import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import reduxThunk from "redux-thunk";
import NumStatusReducer from "./NumStatus/reducer";
import ArrStatusReducer from "./ArrStatus/reducer";

const reducers = combineReducers({
  NumStatusReducer,
  ArrStatusReducer,
});

// const store = legacy_createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
export default store;
