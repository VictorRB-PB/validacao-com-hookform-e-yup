import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:disabled {
        width: 100%;
        height: 42px;
        border: 1px solid #81259D;
        border-radius: 21px;
        background-color: #F25136;
        color: #FFF;
        cursor: default;
        opacity: -4;
        pointer-events: none;
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