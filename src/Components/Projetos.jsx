import React from "react"
import * as S from "./Style.jsx"
import Mini from "./imagensPortfolio/Miniwiki.png"
import Loja from "./imagensPortfolio/Lojaderoupa.png"
import Bruxo from "./imagensPortfolio/Obruxo.png"
import Pet from "./imagensPortfolio/Petshop.png"
import Cruzeiro from "./imagensPortfolio/Cruzeiro.png"
import Banda from "./imagensPortfolio/Banda.png"
import Padaria from "./imagensPortfolio/Paodemel.png"
import Cartoon from "./imagensPortfolio/Cartoon.png"

function Projetos() {
  return (
      <S.Projeto>
        
        <section>
          <div>
            <img src={Mini} alt="" />
            <h2>MINI WIKI</h2>
            <h2>Projeto Baseado em uma MINI WIKI</h2>
            <h3>HTML</h3>
           </div>
            
          
          <div>
          <img src={Loja} alt="" />
            <h2>Lojinha</h2>
            <h2>Projeto Baseado em Petshop</h2> 
            <h3>HTML,CSS</h3>
          </div>

        </section>

        <section>
          <div>
            <img src={Bruxo} alt="" />
          <h2>THE WITCHER</h2>
          <h2>Site Baseado no Jogo/Filme The Witcher</h2>
          <h3>HTML,CSS</h3>
          </div>

          <div>
            <img src={Pet} alt="" />
            <h2>Fantastika</h2>
            <h2>Site baseado em um Petshop</h2>
            <h3>HTML,CSS</h3>
         
          </div>
          </section>
          
          <section>
              <div><img src={Cruzeiro} alt="" />
                   <h2>Cruzeiro</h2>
                   <h2>Variáveis e Condições</h2>
                   <h3>Javascript- Logica da Programação</h3>
              </div>
              <div>
              <img src={Banda} alt="" />
                   <h2>Banda</h2>
                   <h2>Array e Metodos</h2>
                   <h3>Javascript-Logica da Programação</h3>
              </div>
          </section>
          <section>
            <div>
            <S.Img src={Padaria} alt="" />
                   <h2>PADARIA</h2>
                   <h2>Componetizaçao</h2>
                   <h3>React styled-Components</h3>
            </div>

            <div>
            <img src={Cartoon} alt="" />
                   <h2>CARTOON</h2>
                   <h2>Projeto Baseado no Site Cartoon Network</h2>
                   <h3>React Styled-Components Responsivo, Hook UseState</h3>
            </div>
          </section>








        </S.Projeto>
  )
}

export default Projetos