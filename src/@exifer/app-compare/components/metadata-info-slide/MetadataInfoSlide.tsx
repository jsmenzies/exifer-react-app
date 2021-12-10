import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";
import MetadataDTValueBox from "../metadata-datetime-value-box/MetadataDTValueBox";

const MetadataInfoSlide = (metadata: Metadata) => {
    const onKeySelect = (val: string) => {
        metadata.keyFunc(val);
    }

    const onTitleChange = (val: string) => {
        metadata.titleFunc(val);
    }

    const onClickFn = (name: string) => {
        metadata.dateTimeFunc(name);
    };

    return <div className="flex-1 rounded-xl shadow-md">
        <span>
            <input type={"checkbox"}
                   onClick={() => {
                       onTitleChange(metadata.title)
                       onKeySelect(metadata.id)
                   }}
            />
            Title
        <input type={"text"} defaultValue={metadata.title} onChange={val => onTitleChange(val.target.value)}/>
        </span>
        <MetadataDTValueBox  name={"titleDt"} value={metadata.titleDt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"fileModDt"} value={metadata.fileModDt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"exifId0Dt"} value={metadata.exifId0Dt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"exifSubId0DtOrig"} value={metadata.exifSubId0DtOrig} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"exifSubId0DtDigi"} value={metadata.exifSubId0DtDigi} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"pngCreateDt"} value={metadata.pngCreateDt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"quicktimeMetaCreateDt"} value={metadata.quicktimeMetaCreateDt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"gpsDt"} value={metadata.gpsDt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"iptcCreateDt"} value={metadata.iptcCreateDt} onClickFn={onClickFn}/>
        <MetadataDTValueBox  name={"iptcCreateDigiDt"} value={metadata.iptcCreateDigiDt} onClickFn={onClickFn}/>
    </div>
}

export default MetadataInfoSlide
