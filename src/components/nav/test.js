import React from "react";
import { Switch, Route } from "react-router-dom";
import Portfolio from "../portfolio";
import "./style.css";

function Nav() {
      return <Switch>
          <Route path={`:catId`} component={Portfolio} />
      </Switch>
    };

export default Nav;