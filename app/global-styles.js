import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
  }

  #app {
    background-color: #ECECEC;
    min-height: 100%;
    min-width: 100%;
    background: url('https://loading.io/loader/?use=eyJzaXplIjo2MCwic3BlZWQiOjEsImNiayI6IiNmZmZmZmYiLCJjMSI6IiM3QzRERkYiLCJjMiI6IjEyIiwiYzMiOiI3IiwiYzQiOiIyMCIsImM1IjoiNSIsImM2IjoiMzAiLCJ0eXBlIjoiZGVmYXVsdCJ9') 50% 50% no-repeat rgb(249,249,249);
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .aloha {
    font-family: 'Josefin Sans', sans-serif;
  }
`;
