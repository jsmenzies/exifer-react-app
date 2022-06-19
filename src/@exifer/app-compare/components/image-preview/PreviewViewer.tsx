import React from "react";
import {ImagePreview} from "../../../app-domain/app-declarations";

const PreviewViewer = (prop: ImagePreview) => {
    return <div className="col-start-2 col-span-1 mt-1 rounded-xl shadow-md">
        <img
            className="shadow-xl rounded max-w-full h-auto align-middle border-none"
            src={prop.imageUrl}
            alt={"preview"}
        />
    </div>
}

export default PreviewViewer
