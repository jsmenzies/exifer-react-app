import {GetObjectCommand, ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";

const REGION = 'eu-west-1';
const BUCKET_NAME = '';

const s3Client = new S3Client({
    region: REGION,

})

export const getWrapperData: (wrapperId: string) => Promise<string[]> = async (wrapperId: string) => {
    return await s3Client.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Prefix: wrapperId}))
        .then(data => {
            return data.Contents ? data.Contents
                .map(value => value.Key)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        });
}

export const getImagePreview: (key: string) => Promise<string> = async (key: string) => {
    return await getSignedUrl(s3Client, new GetObjectCommand({Bucket: BUCKET_NAME, Key: key}))
}

export const listWrappers: () => Promise<string[]> = async () => {
    return await s3Client.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Delimiter: "/"}))
        .then(data => {
            return data && data.CommonPrefixes ? data.CommonPrefixes
                .map(value => value.Prefix)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        });
}
