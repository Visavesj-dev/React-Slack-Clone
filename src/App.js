import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <Router>
      <>
        <Header />

        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/" exact></Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
