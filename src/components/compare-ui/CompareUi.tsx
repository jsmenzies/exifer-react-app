import React, {useEffect, useState} from 'react';
import InfoPanel from "./info-panel/InfoPanel";
import ImagePreview from "./image-preview/ImagePreview";
import ResultsPanel from "./results-panel/ResultsPanel";
import {listFolders} from "../utils/S3Api";

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
}

const onSubmitFn = (name: String) => {
    // console.log(name);
}

const getNextWrapperId = (wrapperList: string[]) => {
    console.log(wrapperList)
    let wrapperId = wrapperList.pop();
    console.log(wrapperList)
    if (wrapperId) {
        return wrapperId
    } else {
        return "No Wrappers"
    }
}

const CompareUi = () => {
    const [wrapperId, setWrapperId] = useState('');
    const [wrapperList, setWrapperList] = useState<string[]>([])

    useEffect(() => {
        console.log("useEffectr")
        listFolders().then(value => {
            console.log({value})
            setWrapperList(value);
            setWrapperId(() => getNextWrapperId(wrapperList));
            console.log({wrapperList})
        }, reason => {
            console.log({reason})
        })
    }, [])

    return (
        <div style={containerStyle}>
            <InfoPanel wrapperId={wrapperId} contentSize={1234000} wrapperSize={0}/>
            <ImagePreview/>
            <ResultsPanel onSubmitFn={onSubmitFn}
                          wrapperId={wrapperId}
                          datetime={wrapperId}/>

        </div>
    );
}

export default CompareUi;
