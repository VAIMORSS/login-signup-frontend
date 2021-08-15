import React from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  RouteProps,
  BrowserRouter as Router,
} from "react-router-dom";
import SideDrawer from "../components/Drawer/SideDrawer";
import Home from "../pages/Home";
import Axios from "axios";
import Signup from "./../pages/Signup";
import Login from "./../pages/Login";

interface RouteInfoProps extends RouteProps {
  title?: string;
  path: string;
  icon?: React.ReactNode;
  component: any;
}

export const routeInfo: RouteInfoProps[] = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/signup",
    title: "Sign Up",
    component: Signup,
  },
  {
    path: "/login",
    title: "Log In",
    component: Login,
  },
];

const Routes = (props: any) => {
  const jwt = localStorage.getItem("bearer");
  if (jwt) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }
  return (
    <Router>
      {(props.auth.isLoggedIn && (
        <SideDrawer
          routes={
            <Switch>
              {routeInfo.map((route) => (
                <Route exact key={`route-${route.path}`} {...route} />
              ))}
            </Switch>
          }
        />
      )) || <Signup />}
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Routes);
