import React from "react";
import {ImagePreview} from "../../../app-domain/app-declarations";

const PreviewViewer = (prop: ImagePreview) => {
    return <div className="col-start-2 col-span-1 p-6 rounded-xl shadow-md">
        <img src={prop.imageUrl} alt={"preview"}/>
    </div>
}

export default PreviewViewer
