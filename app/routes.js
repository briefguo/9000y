import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import { App } from './component/App';
import { Index } from './component/Index';
import { Service } from './component/Service';
import { Work, WorkDetail } from './component/Work';
import { Support } from './component/Support';
import { About } from './component/About';
import { News, NewsDetail, NewsList } from './component/News';
import { Manage } from './component/Manage';
import { ManageWork } from './component/ManageWork';
import { ManageNews } from './component/ManageNews';
// import { Edit } from './component/Edit';
// import { EditWork } from './component/EditWork';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="service" component={Service} />
    <Route path="work" component={Work}>
      <Redirect from="(:id/)manage" to="/manage/work(/:id)" />
    </Route>
    <Route path="support" component={Support} />
    <Route path="about" component={About} />
    <Route path="news" component={News}>
      <Redirect from="(:id/)manage" to="/manage/news(/:id)" />
    </Route>
    <Route path="news/:id" component={NewsDetail} />
    <Route path="work/:id" component={WorkDetail} />
    <Route path="manage" component={Manage}>
      <Route path="news(/:id)" component={ManageNews} />
      <Route path="work(/:id)" component={ManageWork} />
    </Route>
  </Route>
);
