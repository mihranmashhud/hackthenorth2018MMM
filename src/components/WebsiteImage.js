import React, { Component } from "react";
import styled from "styled-components";
import AddressBarSVG from "./address-bar.svg";
import ScreenCapture from "./rsz_screen-capture.png";

const Wrapper = styled.div`
  float: top;
  margin: 0;
  padding: 0;
  display: block;
`;

const Image = styled.img`
  float: top;
  margin: 0;
  padding: 0;
  display: block;
`;

export default class WebsiteImage extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Image
            src={AddressBarSVG}
            x="0"
            y="0"
            width="200"
            height="20"
            alt="AddressBarSVG"
          />
          <Image
            src={ScreenCapture}
            x="0"
            y="0"
            width="200"
            alt="ScreenCapture"
          />
        </Wrapper>
      </React.Fragment>
    );
  }
}
