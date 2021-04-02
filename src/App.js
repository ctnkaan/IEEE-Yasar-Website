import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home.js";
import AboutUs from "./routes/AboutUs.js";
import Events from "./routes/Events.js";
import SocietyDetail from "./routes/SocietyDetail.js";
import Navbar from "./components/Static/NavbarComp";
import Footer from "./components/Static/Footer";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Switch>
        <RoutedComponent
          header={Navbar}
          path="/society/:slug"
          component={SocietyDetail}
        />
        <RoutedComponent
          header={Navbar}
          footer={Footer}
          path="/about-us"
          component={AboutUs}
        />
        <RoutedComponent
          header={Navbar}
          footer={Footer}
          path="/events"
          component={Events}
        />
        <RoutedComponent
          header={Navbar}
          footer={Footer}
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  );
}

const RoutedComponent = ({
  children,
  header: Header,
  footer: Footer,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <Fragment>
            {Header && <Header />}
            <Component />
            {Footer && <Footer />}
          </Fragment>
        );
      }}
    />
  );
};

export default App;
