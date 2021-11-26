import {GetObjectCommand, HeadObjectCommand, ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {Metadata} from "../app-domain/app-declarations";

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

export const getWrapperKeys: (wrapperId: string) => Promise<string[]> = async (wrapperId: string) => {
    return await s3Client.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Prefix: wrapperId}))
        .then(data => {
            return data.Contents ? data.Contents
                .map(value => value.Key)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        });
}

export const getWrapperImagePreview: (key: string) => Promise<string> = async (key: string) => {
    await getKeyMetadata(key).then(console.log)
    return await getSignedUrl(s3Client, new GetObjectCommand({Bucket: BUCKET_NAME, Key: key}))
}

export const getKeyMetadata: (key: string) => Promise<Metadata> = async (key: string) => {
    return await s3Client.send(new HeadObjectCommand({Bucket: BUCKET_NAME, Key: key}))
        .then(data => {
            return data.Metadata ? {
                contentLength: data.Metadata['content-length'],
                exifId0Dt: data.Metadata['exif-id0-dt'],
                exifSubId0DtDigi: data.Metadata['exif-sub-id0-dt-digi'],
                exifSubId0DtOrig: data.Metadata['exif-sub-id0-dt-orig'],
                extension: data.Metadata['extension'],
                fileModDt: data.Metadata['file-mod-dt'],
                gpsDt: data.Metadata['gps-dt'],
                iptcCreateDigiDt: data.Metadata['iptc-create-digi-dt'],
                iptcCreateDt: data.Metadata['iptc-create-dt'],
                key: data.Metadata['key'],
                pngCreateDt: data.Metadata['png-create-dt'],
                quicktimeMetaCreateDt: data.Metadata['quicktime-meta-create-dt'],
                title: data.Metadata['title'],
                titleDt: data.Metadata['title-dt'],
                wrapperId: data.Metadata['wrapper-id']
            } : {
                contentLength: "",
                exifId0Dt: "",
                exifSubId0DtDigi: "",
                exifSubId0DtOrig: "",
                extension: "",
                fileModDt: "",
                gpsDt: "",
                iptcCreateDigiDt: "",
                iptcCreateDt: "",
                key: "",
                pngCreateDt: "",
                quicktimeMetaCreateDt: "",
                title: "",
                titleDt: "",
                wrapperId: ""
            }
        });
}

export const listAllWrappers: () => Promise<string[]> = async () => {
    return await s3Client.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Delimiter: "/"}))
        .then(data => {
            return data && data.CommonPrefixes ? data.CommonPrefixes
                .map(value => value.Prefix)
                .filter((wrapper): wrapper is string => !!wrapper) : [];
        });
}
