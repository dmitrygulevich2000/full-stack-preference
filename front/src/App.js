import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';
import initStore from './store'


import Main from './components/Main'



function App() {

  return (
    <Provider store={initStore()}>
    <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/">
            <div>Страница не найдена</div>
          </Route>
        </Switch>
      </Router>
    </Provider>


  );
}

export default App;
