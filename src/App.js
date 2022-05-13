import { Provider } from "react-redux"
import Jobs from "./components/Jobs/Jobs";
import './App.css';
import Home from './screens/Home';



import store from './store'
// const store = createStore(() => [], {}, applyMiddleware())
// const store = createStore(() => [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
      <Home  />
    </Provider>
  );
}

export default App;
