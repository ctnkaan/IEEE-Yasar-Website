import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <RoutedComponent path="/" component={Home} />
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
