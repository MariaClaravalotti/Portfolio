import styled from "styled-components"

export const Navegacao = styled.nav`///É uma Nav principal meio das rotas 
    background-color: rgb(189, 224, 254);
    font-family: "Sevillana";

    
`
export const Lista = styled.ul`//É uma Lista nao ordenada ul
display: flex;
width: 100%;
justify-content: space-around;
height: 25vh;
align-items: center;
list-style: none;
font-size: 2rem;
 img{
    border-radius: 16px;
 }
 a:hover{
color: white;
font-weight: 800;
}
a{
     text-decoration: none;
}
@media(min-width: 320px) and (max-width: 768px){
    font-size: 2rem;
    height: 50vh;
    flex-direction: column;
}

`

export const StyleMain = styled.main`//É uma Main
display:flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
height: 100vh;
background-color: rgb(205, 180, 219);
img{
    height: 50vh;
    border-radius: 10%;
}
`
export const Contato = styled.section`//É uma Section
width: 20vw;
display: flex;
justify-content: space-around;
img{
    width: 2vw;
    height: 5vh;
    
}
@media(min-width: 320px) and (max-width: 768px){
    img{
        width: 5rem;
        height: 2rem;
    }}
`
export const Sobre = styled.main`//É uma Main
    display: flex;
    justify-content: space-evenly;
   width: 100%;
   align-items: center;
   color: white;
   background-color: rgb(205, 180, 219);
   height: 80vh;
   @media(min-width: 320px) and (max-width: 768px){
    font-size: 1rem;
    height: 200vh;
    flex-direction: column;
}
`
export const Estudos =styled.section`//É uma Section
display: flex;
flex-direction: column;
align-items: center;
width: 30%;
text-align: center;
justify-content: space-around;

`
export const Habilidades=styled.section`//É uma Section
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

`

export const Profissional = styled.section `//É uma section 
display: flex;
flex-direction: column;
align-items: center ;


`

export const Projeto = styled.main` //É uma MAIN
background-color: rgb(205, 180, 219);
display: flex;
justify-content: space-around;
color: aliceblue;
height: 200vh;
align-items: center;
text-align: center;
font-size: 0.9rem;
flex-wrap: wrap;
 main{
    background-color: rgb(205, 180, 219);
    color:black;
    font-family: "Sevillana";

}
img{
    border-radius: 16px;
}
@media(min-width: 320px) and (max-width: 768px){
    font-size: 0.8rem;
    height: 380vh;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    img{
        height: 20vh;
        width: 40vw;
    }
}
`
export const Img=styled.img` //Como essa img foi um print tive que criar uma const para ela se adequar ao tamanho das outras imagens.
width: 20vw;
@media(min-width: 320px) and (max-width: 768px){
    height: 20vh;
        width: 40vw;
}

`