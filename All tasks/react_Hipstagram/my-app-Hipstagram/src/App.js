import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import CLoginForm from "./components/LoginForm";
import {
  CFeed,
  CPeople,
  CPostPage,
  CRegistrationForm,
  CMyPost,
  CMyPostPage,
} from "./layout";
import pathComp from "./PathForRoute/pathObject";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={pathComp.initial} component={CLoginForm} exact />
        <Route path={pathComp.login} component={CLoginForm} exact />
        <Route path={pathComp.my_profile} component={CMyPostPage} exact />
        <Route
          path={pathComp.new_registration}
          component={CRegistrationForm}
          exact
        />
        <Route path={pathComp.feed} component={CFeed} exact />
        <Route
          path={pathComp.post + ":_id"}
          // we get {match} from url changing
          component={CPostPage}
        />
        <Route path={pathComp.newpost} component={CMyPost} />
        <Route path={pathComp.people} component={CPeople} exact />
        <Route path={pathComp.search} component={CPeople} exact />
      </Switch>
    </Router>
  );
}

export default App;
