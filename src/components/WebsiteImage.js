import React, { Component } from "react";
import styled from "styled-components";
import AddressBarSVG from "./../images/address-bar.svg";
import ScreenCapture from "./../images/rsz_screen-capture.png";

export default class WebsiteImage extends Component {
  render() {
    return (
      <React.Fragment>
        <svg>
          <image src={AddressBarSVG} x="0" y="0" width="580" height="44" />
          <image src={ScreenCapture} x="0" y="44" width="580" height="435" />
        </svg>
      </React.Fragment>
    );
  }
}
