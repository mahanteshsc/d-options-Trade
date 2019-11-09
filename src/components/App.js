import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import IssuesPage from "./issue/IssuesPage";
import TradePage from "./trade/TradePage";
function App() {
  return (
        <div className="container-fluid">
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/issues" component={IssuesPage} />
        <Route path="/trade" component={TradePage} />
        <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
        </div>
);

}

export default App;
