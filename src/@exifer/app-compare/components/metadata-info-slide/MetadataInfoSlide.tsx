import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";

type Passer = {
    metadata: Metadata,
}

const MetadataInfoSlide = (metadata: Passer) => {
    return <div className="flex-1 rounded-xl shadow-md">
        <p>key: {metadata.metadata.key}</p>
        <p>exifId0Dt: {metadata.metadata.exifId0Dt}</p>
        <p>titleDt: {metadata.metadata.titleDt}</p>
        <p>fileModDt: {metadata.metadata.fileModDt}</p>
        <p>exifSubId0DtOrig: {metadata.metadata.exifSubId0DtOrig}</p>
        <p>exifSubId0DtDigi: {metadata.metadata.exifSubId0DtDigi}</p>
        <p>pngCreateDt: {metadata.metadata.pngCreateDt}</p>
        <p>quicktimeMetaCreateDt: {metadata.metadata.quicktimeMetaCreateDt}</p>
        <p>gpsDt: {metadata.metadata.gpsDt}</p>
        <p>iptcCreateDt: {metadata.metadata.iptcCreateDt}</p>
        <p>iptcCreateDigiDt: {metadata.metadata.iptcCreateDigiDt}</p>
    </div>
}

export default MetadataInfoSlide
