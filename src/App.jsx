import React from "react"
import Navegaçao from "./Components/Navegaçao.jsx"
import {createGlobalStyle} from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
 
}
`
function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegaçao/>
   
   
    </>
  )
} 

export default App