<<<<<<< HEAD
import React, {
  Component
} from 'react'

const FadedDesc = styled.p `
  position: absolute;
  border: 30px;
  padding: 30px;
  color: red;

`

=======
import React, { Component } from 'react'
import Description from './Description'
import Title from './Title';
>>>>>>> 133522f3cb017e04a7a86c59bcffab41c9064595

export default class Showcase extends Component {
  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
          <FadedDesc> Exercitation reprehenderit velit Lorem in laboris elit adipisicing ex non ipsum culpa. Dolor consectetur aliqua culpa amet excepteur occaecat officia consectetur et. Cupidatat elit deserunt est irure voluptate ut fugiat adipisicing anim irure excepteur sint. Qui voluptate irure in in nostrud.
          </FadedDesc> 
=======
        <Title/>
        <Description />
>>>>>>> 133522f3cb017e04a7a86c59bcffab41c9064595
      </React.Fragment>
    )
  }
}