import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 90%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 0)),
    color-stop(95%, rgba(255, 255, 255, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 90%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 90%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 90%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 90%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
`;

const FadedDesc = styled.p`
  position: absolute;
  border: 30px;
  padding: 30px;
`;

export default class Showcase extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>
          The title text goes here
        </Title>
        <FadedDesc>
          Exercitation reprehenderit velit Lorem in laboris elit adipisicing ex
          non ipsum culpa. Dolor consectetur aliqua culpa amet excepteur
          occaecat officia consectetur et. Cupidatat elit deserunt est irure
          voluptate ut fugiat adipisicing anim irure excepteur sint. Qui
          voluptate irure in in nostrud.
        </FadedDesc>
      </React.Fragment>
    );
  }
}
