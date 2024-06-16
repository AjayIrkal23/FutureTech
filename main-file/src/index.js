import React, { Component, lazy, useContext, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { AuthProvider, AuthContext } from "./context/Auth";

const HomeV5 = lazy(() => import("./components/home-v5"));
const Investment = lazy(() => import("./components/investment"));
const UserPanel = lazy(() => import("./components/user-panel"));
const About = lazy(() => import("./components/about"));
const Faq = lazy(() => import("./components/faq"));
const Privacy = lazy(() => import("./components/privacy"));
const Contact = lazy(() => import("./components/contact"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const ErrorPage = lazy(() => import("./components/error-page"));
const Admin = lazy(() => import("./components/Admin"));

const adminCredentials = {
  username: "admin",
  password: "loloklol.12A@"
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user && restricted ? (
          <Redirect to="/user-panel" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const AdminRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      admin.username === adminCredentials.username &&
      admin.password === adminCredentials.password
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid admin credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={admin.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={admin.password}
                onChange={handleChange}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        )
      }
    />
  );
};

class Root extends Component {
  render() {
    return (
      <Router>
        <Toaster />
        <Router basename="/">
          <div>
            <AuthProvider>
              <Suspense fallback={<Loader />}>
                <Switch>
                  <Route exact path="/" component={HomeV5} />
                  <Route path="/investment" component={Investment} />
                  <PrivateRoute path="/user-panel" component={UserPanel} />
                  <Route path="/about" component={About} />
                  <Route path="/faq" component={Faq} />
                  <Route path="/privacy" component={Privacy} />
                  <Route path="/contact" component={Contact} />
                  <PublicRoute
                    restricted={true}
                    path="/login"
                    component={Login}
                  />
                  <PublicRoute
                    restricted={true}
                    path="/register"
                    component={Register}
                  />
                  <AdminRoute path="/admin" component={Admin} />
                  <Route component={ErrorPage} />
                </Switch>
              </Suspense>
            </AuthProvider>
          </div>
        </Router>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("app"));
