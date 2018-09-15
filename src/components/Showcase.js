import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
 
`;

const FadeOnLoad = styled.div `

 margin-top: 25px;
    font-size: 21px;
    text-align: center;

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

`;

const FadedDesc = styled.p`

`;

export default class Showcase extends Component {
  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
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
=======
        <FadeOnLoad>
          <FadedDesc>
            Exercitation reprehenderit velit Lorem in laboris elit adipisicing ex
            non ipsum culpa. Dolor consectetur aliqua culpa amet excepteur
            occaecat officia consectetur et. Cupidatat elit deserunt est irure
            voluptate ut fugiat adipisicing anim irure excepteur sint. Qui
            voluptate irure in in nostrud.
          </FadedDesc>
        </FadeOnLoad>
>>>>>>> 26b6c08dca60259216410359c30ef8ebcb54b97f
      </React.Fragment>
    );
  }
}
