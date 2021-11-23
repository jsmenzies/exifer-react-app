import React from "react";
import {formatBytes} from "../../utils/Utils";

type InfoData = {
    wrapperId: string,
    contentSize: number,
    wrapperSize: number
}

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto'
}

const InfoPanel = (props: InfoData) => {
    let humanSize = formatBytes(props.contentSize, 3);

    return <div style={divStyle}>
        <h3>{props.wrapperId}</h3>
        <h5>{props.wrapperSize} copies</h5>
        <h5>{humanSize}</h5>
    </div>
}

export default InfoPanel
