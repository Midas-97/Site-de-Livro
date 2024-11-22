import "./estilo.css"
import styled from "styled-components"

const UlConteiner = styled.ul`
    display: flex;
`
const LiConteiner = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
`

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]

function OpcoesHeader() {
    return(
        <UlConteiner>
        {textoOpcoes.map((texto) => (<LiConteiner><p>{texto}</p></LiConteiner>))}
        </UlConteiner>
    )
}

export default OpcoesHeader