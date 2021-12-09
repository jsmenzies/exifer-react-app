import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";
import MetadataInfoSlide from "../metadata-info-slide/MetadataInfoSlide";

type MetadataList = {
    metadataList: Metadata[],
    updateFunc: any,
}

const MetadataPanel = (metadataList: MetadataList) => {

    const list = metadataList.metadataList.map((md) => <MetadataInfoSlide
        {...md}
        func={metadataList.updateFunc}/>);

    return <div className="flex gap-4 p-2 rounded-xl shadow-md">
        {list}
    </div>
}

export default MetadataPanel
