import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: sidenav;
  background-color: green;
`;

class SideNav extends Component {
  render() {
    return <Container>side nav</Container>;
  }
}

export default SideNav;
