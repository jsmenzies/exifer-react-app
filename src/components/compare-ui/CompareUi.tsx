import React from 'react';
import InfoPanel from "./info-panel/InfoPanel";
import ImagePreview from "./image-preview/ImagePreview";
import ResultsPanel from "./results-panel/ResultsPanel";

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
}

const CompareUi = () => {
    return (
        <div style={containerStyle}>
            <InfoPanel wrapperId={"ID - 65cc0e3e-b710"} contentSize={1234000} wrapperSize={4}/>
            <ImagePreview/>
            <ResultsPanel datetime={"2020-10-10 13:32:12-G3149498.jpg"} wrapperId={"ID - 65cc0e3e-b710"}/>
        </div>
    );
}

export default CompareUi;
