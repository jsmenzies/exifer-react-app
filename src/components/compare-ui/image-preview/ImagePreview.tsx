import React from "react";
import logo from "../../../logo.svg";

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto'
}

const ImagePreview = () => {
    return <div style={divStyle}>
        <img src={logo} className="App-logo" alt="logo"/>
    </div>

}

export default ImagePreview
