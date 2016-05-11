import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import { App } from './component/App';
import { Index } from './component/Index';
import { Service } from './component/Service';
import { Work, WorkDetail, Project } from './component/Work';
import { Support } from './component/Support';
import { About } from './component/About';
import { News, NewsDetail, NewsList } from './component/News';
import { Manage, ManageWork, ManageNews } from './component/Manage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="service" component={Service} />
    <Route path="work" component={Work}>
      <Route path="project" component={Project} />
      <Route path=":id" component={WorkDetail} />
      <Redirect from="(project/)(:id/)manage704949848" to="/manage/work(/:id)" />
    </Route>
    <Route path="support" component={Support} />
    <Route path="about" component={About} />
    <Route path="news" component={News}>
      <Route path="list" component={NewsList} />
      <Route path=":id" component={NewsDetail} />
      <Redirect from="(list/)(:id/)manage704949848" to="/manage/news(/:id)" />
    </Route>
    <Route path="manage" component={Manage}>
      <Route path="news(/:id)" component={ManageNews} />
      <Route path="work(/:id)" component={ManageWork} />
    </Route>
  </Route>
);
