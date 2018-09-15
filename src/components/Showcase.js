import React, { Component } from 'react'
import Description from './Description'
import Title from './Title';

export default class Showcase extends Component {
  render() {
    return (
      <React.Fragment>
        <Title/>
        <Description />
      </React.Fragment>
    )
  }
}
