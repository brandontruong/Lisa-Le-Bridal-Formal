import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import orderBy from 'lodash/orderBy';

import NavBar from './components/NavBar';
import Page from './components/Page';
import appUrl from './config';

const getPages = `${appUrl}pages`;

const App = () => {
  const [nav, setnav] = useState([]);
  useEffect(() => {
    fetch(getPages)
      .then((data) => data.json())
      .then((data) => {
        setnav(orderBy(data, ['menu_order']).map((page) => ({
          name: page.title.rendered,
          pathname: page.slug,
          id: page.id,
        })));
      });
  }, []);

  return (
    <Router>
      <div>
        <NavBar nav={nav} />
        <Switch>
          {
            nav.map(({ pathname, id }) => (
              <Route path={`/${pathname}`} key={`route-${pathname}`}>
                <Page id={id} />
              </Route>
            ))
           }
          <Route path="/">
            <Page id={nav[0] ? nav[0].id : ''} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
