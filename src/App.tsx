/**Redux */
import { Provider } from "react-redux";
import store from "./redux/index";
import Routes from "./routes";

export { store };

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
