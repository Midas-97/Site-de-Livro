import "./estilo.css"
import logo from "../../imagens/logo.svg"
import styled from "styled-components";

const LogoDiv = styled.div`
    display: flex;
    font-size: 30px;
`
const Img = styled.img`
   margin-right: 15px;
`

function Logo(){
    return (
        <LogoDiv>
        <Img src={logo} alt="Logo Alura Books" className="logo-img"></Img>
        <p><strong>Alura Books</strong></p>
        </LogoDiv>
    )
}

export default Logo;