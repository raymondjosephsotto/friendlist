import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: appbar;
  background-color: red;
`;

class AppBar extends Component {
  render() {
    return <Container> app bar</Container>;
  }
}

export default AppBar;
