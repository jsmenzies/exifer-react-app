import {GetObjectCommand, HeadObjectCommand, ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {Metadata, WrapperMetadata, WrapperUpdate} from "../app-domain/app-declarations";
import {mapHeadToMetadata, mapToWrapperMetadata} from "../utils/S3Utils";

const REGION = process.env.REACT_APP_S3_REGION;
const BUCKET_NAME = process.env.REACT_APP_S3_BUCKET_NAME;
const ACCESS_KEY_ID = process.env.REACT_APP_S3_ACCESS_KEY_ID!;
const SECRET_ACCESS_KEY = process.env.REACT_APP_S3_SECRET_ACCESS_KEY!;

const s3Client = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    }
})

export const listAllWrappers: () => Promise<string[]> = async () => {
    return await s3Client.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Delimiter: "/"}))
        .then(data => {
            return data && data.CommonPrefixes ? data.CommonPrefixes
                .map(value => value.Prefix)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        });
}

export const updateWrapper: (update: WrapperUpdate) => Promise<void> = async (update) => {
    console.log(update)
    return await Promise.resolve();
}

export const fetchWrapperMetadata: (id: string) => Promise<WrapperMetadata> = async (id) => {
    const keys: string[] = await getWrapperKeys(id);
    const imageUrl: string = await getWrapperImagePreview(keys[0]);
    const objects: Metadata[] = await Promise.all(keys.map(key => getKeyMetadata(key)))
    return mapToWrapperMetadata(id, imageUrl, objects);
}

export const getWrapperImagePreview: (key: string) => Promise<string> = async (key: string) => {
    return await getSignedUrl(s3Client, new GetObjectCommand({Bucket: BUCKET_NAME, Key: key}))
}

export const getWrapperKeys: (wrapperId: string) => Promise<string[]> = async (wrapperId: string) => {
    return await s3Client.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Prefix: wrapperId}))
        .then(data => {
            return data.Contents ? data.Contents
                .map(value => value.Key)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        });
}

export const getKeyMetadata: (key: string) => Promise<Metadata> = async (key: string) => {
    return await s3Client.send(new HeadObjectCommand({Bucket: BUCKET_NAME, Key: key}))
        .then(head => mapHeadToMetadata(head));
}
