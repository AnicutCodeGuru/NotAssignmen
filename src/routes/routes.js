import { Switch, Route } from 'react-router-dom'
import ActivityListPage from  "../container/Activity/ActivityListPage" ;
import React from 'react';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/configarations' component={ActivityListPage}/>
    </Switch>
  </main>
)

export default Main;