import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}
`

export default GlobalStyle
