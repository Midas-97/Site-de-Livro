import "./estilo.css"
import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader/indx"
import IconesHeader from "../IconesHeader"
import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header