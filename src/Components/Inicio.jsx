import React from "react"
import Perfil from "./imagensPortfolio/Mariaclara.png"
import Instagram from "./imagensPortfolio/Instagram.png"
import Facebook from "./imagensPortfolio/Facebook.png"
import Linkedin from "./imagensPortfolio/Linkedin.png"

function Inicio () {
    return(
        <main>
            <img src={Perfil} alt="" />
            <h2>Maria Clara Programadora</h2>
            <p>Desenvolvedora Front-end com cloud</p>
        <section>
            <img src={Instagram} alt="" /> 
            <img src={Linkedin} alt="" />
            <img src={Facebook} alt="" />
        </section>


        </main>
    )
}

export default Inicio 