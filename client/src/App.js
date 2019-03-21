import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//
// ─── METHODS ────────────────────────────────────────────────────────────────────
//

import { decodeToken } from "../src/utils/decodeToken";
import { setCurrentUser } from "./utils/setCurrentUser";

// ─── REDUX ──────────────────────────────────────────────────────────────────────
//

import { Provider } from "react-redux";
import store from "./redux/store";
import { RESET_DROP_DOWN } from "./redux/type/layout/layoutType";

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//

import Nav from "./components/layout/nav/Nav";
import Home from "./components/layout/home/Home";
import Services from "./components/layout/services/Services";
import Work from "./components/layout/work/Work";
// import Portfolio from "./components/layout/portfolio/Portfolio";
import About from "./components/layout/about/About";
import Contact from "./components/layout/contact/Contact";

//
// ─── ADMIN COMPONENTS ───────────────────────────────────────────────────────────
//

import Dashboard from "./components/admin/Dashboard";

//
// ─── AUTH ───────────────────────────────────────────────────────────────────────
//

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

class App extends Component {
  // get user info from token to redux globaly
  componentWillMount() {
    const token = decodeToken();
    if (token) {
      store.dispatch(setCurrentUser(token));
    }
  }

  // reset drop down menu from nav
  resetOnWheel = () => {
    store.dispatch({
      type: RESET_DROP_DOWN,
      payload: false
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" onWheel={this.resetOnWheel}>
            <Route exact path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Services} />
            <Route exact path="/" component={Work} />
            {/* <Route exact path="/" component={Portfolio} /> */}
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Contact} />

            {/* admin routes */}
            <Route exact path="/dashboard" component={Dashboard} />

            {/* auth routes */}
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
