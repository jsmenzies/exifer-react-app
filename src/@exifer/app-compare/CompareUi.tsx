import React, {useEffect, useState} from "react";
import InfoPanel from "./components/info-panel/InfoPanel";
import PreviewViewer from "./components/image-preview/PreviewViewer";
import ResultsPanel from "./components/results-panel/ResultsPanel";
import {fetchWrapperMetadata, listAllWrappers} from "../s3-api/s3-api";
import {WrapperMetadata} from "../app-domain/app-declarations";
import MetadataPanel from "./components/metadata-panel/MetadataPanel";

const CompareUi = () => {
    const [wrapperList, setWrapperList] = useState<string[]>([]);
    const [wrapperId, setWrapperId] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentMetadata, setCurrentMetadata] = useState<WrapperMetadata>({
        imageUrl: "",
        wrapperId: "",
        wrapperKeys: [],
        wrapperObjects: [],
        wrapperSize: 0
    })

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
            fetchWrapperMetadata(wrapperId)
                .then(wrapper => setCurrentMetadata(wrapper))
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
        <>
            <div className="grid grid-cols-3 gap-4">
                <InfoPanel
                    wrapperKeys={currentMetadata.wrapperKeys}
                    wrapperId={wrapperId}
                    wrapperSize={currentMetadata.wrapperSize}
                />
                <PreviewViewer imageUrl={currentMetadata.imageUrl}/>
                <ResultsPanel
                    onSubmitFn={onSubmitFn}
                    wrapperId={wrapperId}
                    datetime={wrapperId}/>
            </div>
            <div>
            <MetadataPanel metadataList={currentMetadata.wrapperObjects}/>
            </div>
        </>

    );
};

export default CompareUi;
