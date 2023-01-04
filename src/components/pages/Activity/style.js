import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
    background-color:${props => props?.backgroundColor && props.backgroundColor};

    
    ${props => props?.padding && css`
        padding: ${props.padding}px;
    `}

    ${props => props?.margin && css`
        margin: ${props.margin}px;
    `}
`