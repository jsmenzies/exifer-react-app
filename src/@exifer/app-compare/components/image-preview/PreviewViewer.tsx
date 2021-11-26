import React from "react";
import {ImagePreview} from "../../../app-domain/app-declarations";

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto'
}

const PreviewViewer = (prop: ImagePreview) => {
    return <div style={divStyle}>
        <img src={prop.imageUrl} className="App-logo" alt="logo"/>
    </div>

}

export default PreviewViewer
