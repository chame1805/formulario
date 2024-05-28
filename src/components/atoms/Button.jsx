import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 40%;
    height: 30px;
    background-color: #0308a3;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    &:hover {
        background-color: #5257de;
    }
`;

function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;