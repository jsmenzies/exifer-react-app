import React from "react";

type InfoData = {
    wrapperId: string,
    wrapperKeys: string[],
    wrapperSize: number,
}

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto'
}

const InfoPanel = (info: InfoData) => {
    const listItems = info.wrapperKeys.map((key) => <li key={key}>{key}</li>);

    return <div style={divStyle}>
        <h3>{info.wrapperId}</h3>
        <h5>{info.wrapperSize} copies</h5>
        <div>{listItems}</div>
    </div>
}

export default InfoPanel
