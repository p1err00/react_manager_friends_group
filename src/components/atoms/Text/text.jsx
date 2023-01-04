import React from "react";
import PropTypes from 'prop-types'


export const Text = ({...props}) => {
    
    const { backgroundColoc, size, contentText } = props;

    return (
        <div>
            { props.contentText }
        </div>
    )
}

Text.protoTypes = {
    backgroundColor : PropTypes.string,
    size            : PropTypes.number
}