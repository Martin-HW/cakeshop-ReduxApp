import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
// import HooksCakeContainer from './components/HooksCakeContainer';
// import Hooks from './components/Hooks';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />*/}
        <CakeContainer />
        {/*<Hooks />*/}
      </div>
    </Provider>
  );
};

export default App;
