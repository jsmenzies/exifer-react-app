import React, {useEffect, useState} from "react";
import InfoPanel from "./info-panel/InfoPanel";
import ImagePreview from "./image-preview/ImagePreview";
import ResultsPanel from "./results-panel/ResultsPanel";
import {getWrapperData, listWrappers} from "../utils/S3Api";

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
};

const CompareUi = () => {
    const [wrapperList, setWrapperList] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [wrapperKeys, setWrapperKeys] = useState<string[]>([]);
    const [wrapperId, setWrapperId] = useState<string>("");

    useEffect(() => {
        listWrappers()
            .then(wrappers => {
                setWrapperList(wrappers)
                return wrappers
            })
            .then(wrappers => {
                setWrapperId(wrappers[0])
                setCurrentIndex(0)
            })
    }, []);

    useEffect(() => {
        if (wrapperId !== '') {
            getWrapperData(wrapperId)
                .then(setWrapperKeys)
        }
    }, [wrapperId])

    const updateWrapperId = () => {
        const index = currentIndex + 1
        setCurrentIndex(index)
        setWrapperId(wrapperList[index])
    }

    const onSubmitFn = (name: String) => {
        updateWrapperId()
    };

    return (
        <div style={containerStyle}>
            <InfoPanel
                wrapperKeys={wrapperKeys}
                wrapperId={wrapperId}
                wrapperSize={wrapperKeys.length}
            />
            <ImagePreview/>
            <ResultsPanel
                onSubmitFn={onSubmitFn}
                wrapperId={wrapperId}
                datetime={wrapperId}
            />
        </div>
    );
};

export default CompareUi;
