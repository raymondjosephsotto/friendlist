import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { IconButton, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import UserToolBar from "./UserToolBar";

const Container = styled.div`
  grid-area: appbar;
  background-color: red;
`;

class AppBar extends Component {
  render() {
    return (
      <Container>
        <UserToolBar />
      </Container>
    );
  }
}

export default AppBar;
