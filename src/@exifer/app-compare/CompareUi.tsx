import React, {useEffect, useState} from "react";
import InfoPanel from "./components/info-panel/InfoPanel";
import PreviewViewer from "./components/image-preview/PreviewViewer";
import ResultsPanel from "./components/results-panel/ResultsPanel";
import {getWrapperImagePreview, getWrapperKeys, listAllWrappers} from "../utils/S3Api";

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
    const [wrapperPreview, setWrapperPreview] = useState<string>("")

    useEffect(() => {
        listAllWrappers()
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
        if (wrapperId !== '' && wrapperId !== undefined) {
            getWrapperKeys(wrapperId)
                .then(data => {
                    setWrapperKeys(data)
                    return data
                })
                .then(data => {
                    let key = data[0];
                    getWrapperImagePreview(key)
                        .then(data => {
                            setWrapperPreview(data);
                        })
                })
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
            <PreviewViewer imageUrl={wrapperPreview}/>
            <ResultsPanel
                onSubmitFn={onSubmitFn}
                wrapperId={wrapperId}
                datetime={wrapperId}
            />
        </div>
    );
};

export default CompareUi;
