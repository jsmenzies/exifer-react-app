import React from "react";
import {ImagePreview} from "../../../app-domain/app-declarations";

const PreviewViewer = (prop: ImagePreview) => {
    return <div className="flex-1 p-6 rounded-xl shadow-md">
        <img src={prop.imageUrl} alt={"preview"}/>
    </div>
}

export default PreviewViewer
