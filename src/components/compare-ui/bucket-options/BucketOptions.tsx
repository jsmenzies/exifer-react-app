import React from "react";

const optionStyle = {
    margin: 'auto'
}

const cStyle = {
    display: 'flex'
}

const BucketOptions = () => {
    return <div style={cStyle}>
        <h5>Bucket Options</h5>
        <input style={optionStyle} type="button" id="old " name="old" value="Old"/>
        <input style={optionStyle} type="button" id="family " name="family" value="Family"/>
        <input style={optionStyle} type="button" id="archive " name="archive" value="Archive"/>
    </div>
}

export default BucketOptions
