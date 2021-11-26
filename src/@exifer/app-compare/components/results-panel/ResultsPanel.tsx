import BucketOptions from "../bucket-options/BucketOptions";
import {Result} from "../../../app-domain/app-declarations";

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto',
}

const ResultsPanel = (props: Result) => {
    let newTitle = props.datetime;

    return <div style={divStyle}>
        <h3>{props.datetime}</h3>
        <h5>s3://results-bucket/{props.wrapperId}/2020-10-10 13:32:12-G3149498.jpg</h5>
        <BucketOptions/>
        <button onClick={() => props.onSubmitFn(newTitle)}>Submit</button>
    </div>
}

export default ResultsPanel
