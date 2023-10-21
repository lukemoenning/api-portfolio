import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  :root {
    --background: #ffffff;
    --text-color: #000000;
    --primary-color: #003366;
    --secondary-color: #6C757D;
    --tertiary-color: #28A745;
    --sidenav-color: #F8F9FA;
    --footer-color: #F8F9FA;
  }

  [data-theme="dark"] {
    --background: #000000;
    --text-color: #ffffff;
    --primary-color: #66b2ff;
    --secondary-color: #1B2631;
    --tertiary-color: #145A32;
    --sidenav-color: #1B2631;
    --footer-color: #1B2631;
  }
`
