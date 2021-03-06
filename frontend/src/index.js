
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";

import AdminLayout from "layouts/Admin.jsx";
import Login from "layouts/Login";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/login" component={Login} />

      <Redirect from="/" to="/admin/theodoichat" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
