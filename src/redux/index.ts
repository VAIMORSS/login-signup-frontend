// Imports: Dependencies
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root/reducers";
import rootSaga from "./root/sagas";
import { composeWithDevTools } from "redux-devtools-extension";
export { Provider, connect } from "react-redux";




const sagaMiddleware = createSagaMiddleware(); // Redux: Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))); // Middleware: Redux Saga
sagaMiddleware.run(rootSaga); // Exports

export default store;

/*** Exporting resourses */
export * from "./auth/actions";
