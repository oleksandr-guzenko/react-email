import { Provider } from "react-redux";
import store from "./store";

import Header from './components/layouts/Header';
import WebForm from './components/web-form/WebForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <WebForm />
      </div>
    </Provider>
  );
}

export default App;
