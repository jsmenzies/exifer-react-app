import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";

const MetadataInfoSlide = (metadata: Metadata) => {
    return <div className="flex-1 rounded-xl shadow-md">
        <span className="text-gray-500 p-2">Title</span>
        <input className="form-input shadow-mt-1 rounded w-full p-1"
               defaultValue={metadata.title}/>
        <span className="text-gray-500 p-2">exifId0Dt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.exifId0Dt}/>
        <span className="text-gray-500 p-2">titleDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.titleDt}/>
        <span className="text-gray-500 p-2">fileModDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.fileModDt}/>
        <span className="text-gray-500 p-2">exifSubId0DtOrig</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.exifSubId0DtOrig}/>
        <span className="text-gray-500 p-2">exifSubId0DtDigi</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.exifSubId0DtDigi}/>
        <span className="text-gray-500 p-2">pngCreateDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.pngCreateDt}/>
        <span className="text-gray-500 p-2">quicktimeMetaCreateDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.quicktimeMetaCreateDt}/>
        <span className="text-gray-500 p-2">gpsDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.gpsDt}/>
        <span className="text-gray-500 p-2">iptcCreateDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.iptcCreateDt}/>
        <span className="text-gray-500 p-2">iptcCreateDigiDt</span>
        <input className="form-input mt-1 rounded"
               defaultValue={metadata.iptcCreateDigiDt}/>
    </div>
}

export default MetadataInfoSlide
