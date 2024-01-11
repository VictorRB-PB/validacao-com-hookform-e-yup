import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:disabled {
        background-color: #F25136;
        cursor: default;
        opacity: 0.6;
    }.invalid {
        background: red;
    }.error {
        color: red;
    }

    &:disabled:hover{
        background-color: #F25136;
    }

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`