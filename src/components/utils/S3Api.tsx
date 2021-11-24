import {S3} from "@aws-sdk/client-s3";

const REGION = '';
const BUCKET_NAME = '';

const s3Client = new S3({
    region: REGION,
    credentials: {
        accessKeyId: "",
        secretAccessKey: "",
    }
});

export const getWrapperData: (wrapperId: string) => Promise<string[]> = async (wrapperId: string) => {
    console.log("fetching individual " + wrapperId)
    return await s3Client.listObjectsV2({Bucket: BUCKET_NAME, Prefix: wrapperId})
        .then(data => {
            return data.Contents ? data.Contents
                .map(value => value.Key)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        }, reason => {
            console.log(reason)
            return new Array<string>()
        });
}

export const getImagePreview = async (key: string) => {
    console.log("Fetching image " + key)
    return await s3Client.getObject({Bucket: BUCKET_NAME, Key: key})
}

export const listWrappers: () => Promise<string[]> = async () => {
    return await s3Client.listObjectsV2({Bucket: BUCKET_NAME, Delimiter: "/"})
        .then(data => {
            return data && data.CommonPrefixes ? data.CommonPrefixes
                .map(value => value.Prefix)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        }, reason => {
            console.log(reason)
            return new Array<string>()
        });
}
