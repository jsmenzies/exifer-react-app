import BucketOptions from "../bucket-options/BucketOptions";
import {Result} from "../../../app-domain/app-declarations";
import React from "react";

const ResultsPanel = (props: Result) => {
    let newTitle = props.datetime;

    return <div className="p-6 rounded-xl shadow-md">
        <h5 className="col-end-3 col-span-1 text-xl font-medium text-black">
            s3://results-bucket/{props.wrapperId}/2020-10-10 13:32:12-G3149498.jpg</h5>
        <p className="text-gray-500">{props.datetime}</p>
        <br/>
        <BucketOptions/>
        <br/>
        <button onClick={() => props.onSubmitFn(newTitle)}>Submit</button>
    </div>
}

export default ResultsPanel
