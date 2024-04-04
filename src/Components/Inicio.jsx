import React from "react"
import Perfil from "./imagensPortfolio/Mariaclara.png"
import Instagram from "./imagensPortfolio/Instagram.png"
import Facebook from "./imagensPortfolio/Facebook.png"
import Linkedin from "./imagensPortfolio/Linkedin.png"
import * as S from "./Style.jsx"

function Inicio () {
    return(
        <S.StyleMain>
            <img src={Perfil} alt="" />
            <h2>Maria Clara Programadora</h2>
            <p>Desenvolvedora Front-end com cloud</p>
        <S.Contato>
            <img src={Instagram} alt="" /> 
            <img src={Linkedin} alt="" />
            <img src={Facebook} alt="" />
        </S.Contato>


        </S.StyleMain>
    )
}

export default Inicio 