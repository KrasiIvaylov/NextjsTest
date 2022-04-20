// Styled elements for the Card go here
import styled, { css } from "styled-components";

export const CardContainer = styled(({...props}) => <div{...props}/>)`
height: auto;
display: flex;
align-self: flex-start;
align-items: center;
margin-bottom: 25px;
border-radius: 8px;
cursor: pointer;


${ props => props.bgColor === 0 && css`
    width: 100%;
    background-color: ${({ theme }) => theme.grayF0};

`}

${ props => props.bgColor === 1 && css`
    width: 100%;
    background-color: ${({ theme }) => theme.grayEA};
`}

${ props => props.bgColor === 2 && css`
    width: 100%;
    background-color: ${({ theme }) => theme.grayE2};
`}

${ props => props.bgColor === 3 && css`
    width: 100%;
    background-color: ${({ theme }) => theme.grayE2};
`}

&:hover {
    border: 2px solid  ${({ theme }) => theme.main};
}
`;