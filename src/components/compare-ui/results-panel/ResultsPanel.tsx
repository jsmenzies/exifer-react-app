import BucketOptions from "../bucket-options/BucketOptions";

type Results = {
    wrapperId: string,
    datetime: string,
}

const divStyle = {
    borderRadius: '25px',
    padding: '20px',
    margin: 'auto',
}

const ResultsPanel = (props: Results) => {
    return <div style={divStyle}>
        <h3>{props.datetime}</h3>
        <h5>s3://results-bucket/{props.wrapperId}/2020-10-10 13:32:12-G3149498.jpg</h5>
        <BucketOptions/>
        <button>Submit</button>
    </div>
}

export default ResultsPanel
