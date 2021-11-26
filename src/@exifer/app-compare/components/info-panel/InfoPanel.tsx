import React from "react";
import {Wrapper} from "../../../app-domain/app-declarations";

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto'
}

const InfoPanel = (wrapper: Wrapper) => {
    const listItems = wrapper.wrapperKeys.map((key) => <li key={key}>{key}</li>);

    return <div style={divStyle}>
        <h3>{wrapper.wrapperId}</h3>
        <h5>{wrapper.wrapperSize} copies</h5>
        <div>{listItems}</div>
    </div>
}

export default InfoPanel
