"use strict";

import '../common/lib';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../component/App.jsx';
import { Index } from '../component/Index.jsx';
import { Service } from '../component/Service.jsx';
import { Work } from '../component/Work.jsx';
import { Support } from '../component/Support.jsx';
import { About } from '../component/About.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="service" component={Service} />
      <Route path="work" component={Work} />
      <Route path="support" component={Support} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('reactBox'))
