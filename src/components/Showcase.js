import React, {
  Component
} from 'react'

const FadedDesc = styled.p `
  position: absolute;
  border: 30px;
  padding: 30px;
  color: red;

`


export default class Showcase extends Component {
  render() {
    return (
      <React.Fragment>
          <FadedDesc> Exercitation reprehenderit velit Lorem in laboris elit adipisicing ex non ipsum culpa. Dolor consectetur aliqua culpa amet excepteur occaecat officia consectetur et. Cupidatat elit deserunt est irure voluptate ut fugiat adipisicing anim irure excepteur sint. Qui voluptate irure in in nostrud.
          </FadedDesc> 
      </React.Fragment>
    )
  }
}