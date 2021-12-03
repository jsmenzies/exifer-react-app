import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";

const MetadataInfoSlide = (metadata: Metadata) => {
    return <div className="flex-1 rounded-xl shadow-md">
        <p>title: {metadata.title}</p>
        <p>exifId0Dt: {metadata.exifId0Dt}</p>
        <p>titleDt: {metadata.titleDt}</p>
        <p>fileModDt: {metadata.fileModDt}</p>
        <p>exifSubId0DtOrig: {metadata.exifSubId0DtOrig}</p>
        <p>exifSubId0DtDigi: {metadata.exifSubId0DtDigi}</p>
        <p>pngCreateDt: {metadata.pngCreateDt}</p>
        <p>quicktimeMetaCreateDt: {metadata.quicktimeMetaCreateDt}</p>
        <p>gpsDt: {metadata.gpsDt}</p>
        <p>iptcCreateDt: {metadata.iptcCreateDt}</p>
        <p>iptcCreateDigiDt: {metadata.iptcCreateDigiDt}</p>
    </div>
}

export default MetadataInfoSlide
