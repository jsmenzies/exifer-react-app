import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";
import MetadataInfoSlide from "../metadata-info-slide/MetadataInfoSlide";

type MetadataList = {
    metadataList: Metadata[]
}

const MetadataPanel = (metadataList: MetadataList) => {

    const list = metadataList.metadataList.map((md) => <MetadataInfoSlide {...md}/>);

    return <div className="col-span-3 flex-row gap-4 p-2 rounded-xl shadow-md">
        {list}
    </div>
}

export default MetadataPanel
