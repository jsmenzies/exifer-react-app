import React from "react";
import logo from "../../../logo.svg";

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto'
}

type ImagePreview = {
    imageUrl: string,
}

const ImagePreview = (prop: ImagePreview) => {
    return <div style={divStyle}>
        <img src={prop.imageUrl} className="App-logo" alt="logo"/>
    </div>

}

export default ImagePreview
