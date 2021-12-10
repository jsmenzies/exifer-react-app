import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";
import MetadataInfoSlide from "../metadata-info-slide/MetadataInfoSlide";

type MetadataList = {
    metadataList: Metadata[],
    dateTimeFunc: any,
    titleFunc: any,
    keyFunc: any,
}

const MetadataPanel = (metadataList: MetadataList) => {

    const list = metadataList.metadataList.map((md) => <MetadataInfoSlide
        {...md}
        dateTimeFunc={metadataList.dateTimeFunc}
        keyFunc={metadataList.keyFunc}
        titleFunc={metadataList.titleFunc}
        key={md.id}
    />);

    return <div className="flex gap-4 p-2 rounded-xl shadow-md">
        {list}
    </div>
}

export default MetadataPanel
