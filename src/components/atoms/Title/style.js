import styled, {css} from "styled-components";

export const StyledTitle = styled.div`

    ${props => props?.size && css`
        font-size: ${props.size}px;
    `}

    ${props => props?.backgroundColor && css`
        background-color: ${props.backgroundColor};
    `}

    border-bottom: 3px dotted black;
`
