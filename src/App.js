import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import AppBar from "./navigation/AppBar/AppBar";
import SideNav from "./navigation/SideNav/SideNav";
import Canvas from "./navigation/Canvas/Canvas";
import "./App.css";

const AppLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "sidenav appbar"
    "sidenav canvas";
  grid-template-columns: 64px 1fr;
  grid-template-rows: 55px 1fr;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <SideNav />
        <AppBar />
        <Canvas />
      </AppLayout>
    );
  }
}

export default App;
