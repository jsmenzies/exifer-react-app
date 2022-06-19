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
        <h3 className="text-gray-500">ID: {result.id}</h3>
        <br/>
        <h3 className="text-gray-500">Date: {result.datetime}</h3>
        <br/>
        <h3 className="text-gray-500">Title: {result.title}</h3>
        <br/>
        <BucketOptions labels={labels} updateFunc={updateLabels}/>
        <br/>
        <button
            className={result.datetime.length < 5 ? "text-red-400" : "text-green-700"}
            disabled={result.datetime.length < 5}
            onClick={() => {
                result.onSubmitFn({
                    id: result.id,
                    title: result.title,
                    wrapperId: result.wrapperId,
                    finalDateTime: result.datetime,
                    labels: labels,
                })
                resetLabels();
            }}>Submit
        </button>
    </div>
}

export default ResultsPanel
