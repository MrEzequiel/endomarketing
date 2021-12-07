import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Open+Sans:wght@300;400;500;700&family=Petrona:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font: 400 1.6rem 'Open Sans', sans-serif;
    color: #707070;
    background: #F2F3F5;
  }

  a {
    text-decoration: none;
    color: inherit;
  } 

  ol,
  ul {
    list-style: none;
  }

  button, input {
    background: transparent;
    color: inherit;
    font-family: inherit;
    border: none;
    outline: none;
  }
`
