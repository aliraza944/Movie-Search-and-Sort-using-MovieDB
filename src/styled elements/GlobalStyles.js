import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
margin:0;
padding:0;

}
html{
    line-height:1.75;
}
:root{
--clr-background:#20209A;
--clr-headingPrimary:#ffff;
--clr-headingSecondary:#090962;
--clr-yearRelease:#9F9FD3;
--clr-movieTags:#BBBBE1;


--fs-title:2.441rem;
--fs-subtitle:1.953rem;
--fs-rating:0.8rem;
--fs-small:0.8rem;



// for all the buttons
--fs-button:1rem;
--br-button:20px;
--pd-button:0.1em 0.5em 0.1em 0.5em;
--bo-button:1px solid white;

}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

body{
    margin:0;
background-color:var(--clr-background);
    font-family:  'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size:10px;
}
h1,h2,h3,p{padding:0; margin:0;}


`;
export default GlobalStyle;
