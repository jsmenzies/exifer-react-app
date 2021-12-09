import React, {useEffect, useState} from "react";
import InfoPanel from "./components/info-panel/InfoPanel";
import PreviewViewer from "./components/image-preview/PreviewViewer";
import ResultsPanel from "./components/results-panel/ResultsPanel";
import {fetchWrapperMetadata, listAllWrappers} from "../apis/s3-api";
import {Update, WrapperMetadata} from "../app-domain/app-declarations";
import MetadataPanel from "./components/metadata-panel/MetadataPanel";

const CompareUi = () => {
        const [wrapperList, setWrapperList] = useState<string[]>([]);
        const [wrapperId, setWrapperId] = useState<string>("");
        const [currentIndex, setCurrentIndex] = useState<number>(0);
        const [resultDT, setResultDT] = useState<string>("");
        const [resultKey, setResultKey] = useState<string>("");
        const [resultTitle, setResultTitle] = useState<string>("");
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
                    console.log("Setting first wrapper ID")
                    setWrapperId(wrappers[0])
                    setCurrentIndex(0)
                })
        }, []);

        useEffect(() => {
            if (wrapperId !== '' && wrapperId !== undefined) {
                fetchWrapperMetadata(wrapperId)
                    .then(wrapper => {
                        setCurrentMetadata(wrapper)
                    })
                console.log("Fetching from here")
            }
        }, [wrapperId])

        const updateWrapperId = () => {
            const index = currentIndex + 1
            setCurrentIndex(index)
            setWrapperId(wrapperList[index])
            setResultDT("")
        }

        const onSubmitFn = (update: Update) => {
            // updateWrapper({
            //     wrapperId: wrapperId,
            //     finalDateTime: update.dateTime,
            //     labels: update.labels,
            // }).then(value => console.log(value))
            console.log("onSubmit pressed")
            updateWrapperId()
        };

        const updateResultDateTime = (name: string) => {
            setResultDT(name);
        };

        const updateResultKey = (key: string) => {
            setResultKey(key)
        }

        const updateResultTitle = (title: string) => {
            setResultTitle(title)
        }

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
                        title={resultTitle}
                        id={resultKey}
                        wrapperId={wrapperId}
                        datetime={resultDT}
                    />
                </div>
                <div>
                    <MetadataPanel dateTimeFunc={updateResultDateTime}
                                   keyFunc={updateResultKey}
                                   titleFunc={updateResultTitle}
                                   metadataList={currentMetadata.wrapperObjects}/>
                </div>
            </>

        );
    }
;

export default CompareUi;
