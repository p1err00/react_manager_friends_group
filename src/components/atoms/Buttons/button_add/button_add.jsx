import React from "react";
import { StyledButtonAdd } from "./style";


export const Button_add = ({...props}) => {

    const { url } = props;

    return (
        <StyledButtonAdd {...props}>
            <button type="button" href={url}>+</button>
        </StyledButtonAdd>
    )
}