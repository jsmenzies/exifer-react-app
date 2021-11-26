import React from "react";
import {Metadata} from "../../../app-domain/app-declarations";

type MetadataList = {
    metadataList: Metadata[]
}

const MetadataPanel = (metadataList: MetadataList) => {

    const list = metadataList.metadataList.map((md) => <li key={md.key}>{md.exifId0Dt}</li>);

    return <div className="flex-1 p-6 rounded-xl shadow-md">
        {list}
    </div>
}

export default MetadataPanel
