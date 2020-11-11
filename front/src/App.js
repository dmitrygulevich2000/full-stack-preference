import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from 'react-redux'

import './App.css';

import Main from './components/Main'
import TopPanel from './components/TopPanel';



function App() {
  const userLogin = useSelector((state) => state.userLogin.userLogin)

  return (
    <div>
      <TopPanel LoggedUser={userLogin}/>
      <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path='/tables' exact>
              <div>Столы</div>
            </Route>

            <Route path="/">
              <div>Страница не найдена</div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
