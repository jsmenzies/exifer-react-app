import BucketOptions from "../bucket-options/BucketOptions";
import {Result} from "../../../app-domain/app-declarations";
import React, {useState} from "react";

const ResultsPanel = (result: Result) => {
    const [labels, setLabels] = useState<string[]>([]);

    const updateLabels = (labels: string[]) => {
        setLabels(labels)
    }

    const resetLabels = () => {
        setLabels([]);
    }

    return <div className="p-6 rounded-xl shadow-md">
        <h5 className="col-end-3 col-span-1 text-xl font-medium text-black">
            s3://results-bucket/{result.wrapperId}{result.datetime}</h5>
        <h3 className="text-gray-500">{result.id}</h3>
        <br/>
        <h3 className="text-gray-500">{result.datetime}</h3>
        <br/>
        <h3 className="text-gray-500">{result.title}</h3>
        <br/>
        <BucketOptions labels={labels} updateFunc={updateLabels}/>
        <br/>
        <button
            className={!result.datetime ? "text-red-400" : "text-green-700"}
            disabled={!result.datetime}
            onClick={() => {
                result.onSubmitFn({
                    dateTime: result.datetime,
                    labels: labels,
                })
                resetLabels();
            }}>Submit
        </button>
    </div>
}

export default ResultsPanel
