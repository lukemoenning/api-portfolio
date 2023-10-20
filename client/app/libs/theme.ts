import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  :root {
    --background: #fff;
    --text-color: #000;
    --primary-color: #ff0000;
    --secondary-color: #6C757D;
    --tertiary-color: #28A745;
    --sidenav-color: #F8F9FA;
    --footer-color: #F8F9FA;
  }

  [data-theme="dark"] {
    --background: #000;
    --text-color: #FFF;
    --primary-color: #FFF;
    --secondary-color: #1B2631;
    --tertiary-color: #145A32;
    --sidenav-color: #1B2631;
    --footer-color: #1B2631;
  }
`
