import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from 'react-redux'

import './App.css';

import Main from './components/Main'
import TopPanel from './components/TopPanel';
import Tables from './components/Tables';

import GameField from './components/GameField'


function App() {
  const userLogin = useSelector((state) => state.userLogin.userLogin)

  return (
    <>
      <TopPanel LoggedUser={userLogin}/>
      <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path='/tables' exact>
              <Tables/>
            </Route>

            <Route path="/field">
              <GameField/>
            </Route>

            <Route path="/">
              <div>Страница не найдена</div>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
