import {HeadObjectCommandOutput} from "@aws-sdk/client-s3";
import {Metadata} from "../app-domain/app-declarations";

export function mapHeadToMetadata(head: HeadObjectCommandOutput) {
    return head.Metadata ? {
        contentLength: head.Metadata['content-length'],
        exifId0Dt: head.Metadata['exif-id0-dt'],
        exifSubId0DtDigi: head.Metadata['exif-sub-id0-dt-digi'],
        exifSubId0DtOrig: head.Metadata['exif-sub-id0-dt-orig'],
        extension: head.Metadata['extension'],
        fileModDt: head.Metadata['file-mod-dt'],
        gpsDt: head.Metadata['gps-dt'],
        iptcCreateDigiDt: head.Metadata['iptc-create-digi-dt'],
        iptcCreateDt: head.Metadata['iptc-create-dt'],
        key: head.Metadata['key'],
        pngCreateDt: head.Metadata['png-create-dt'],
        quicktimeMetaCreateDt: head.Metadata['quicktime-meta-create-dt'],
        title: head.Metadata['title'],
        titleDt: head.Metadata['title-dt'],
        wrapperId: head.Metadata['wrapper-id'],
        func: undefined,
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
        wrapperId: "",
        func: undefined,
    }
}

export function mapToWrapperMetadata(wrapperId: string, imageUrl: string, objects: Metadata[]) {
    return {
        wrapperId: wrapperId,
        imageUrl: imageUrl,
        wrapperKeys: objects.map(md => md.key),
        wrapperSize: objects.length,
        wrapperObjects: objects
    }
}
