import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/base.scss';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from "./molecules/Navbar";

export default function Home() {
  return (
    <div className="Home">
      <BrowserRouter history={createBrowserHistory}>
        <Navbar/>
        <Switch>
          <Route path='/' exact>
            Home
          </Route>
          <Route path="/path1" exact>
            <div className="Home__box">
              First box
            </div>
          </Route>
          <Route path="/path2" exact>
            <div className="Home__box">
              Second box
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<Home/>, document.getElementById('root'));
}
