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
        id: head.Metadata['key'],
        pngCreateDt: head.Metadata['png-create-dt'],
        quicktimeMetaCreateDt: head.Metadata['quicktime-meta-create-dt'],
        title: head.Metadata['title'],
        titleDt: head.Metadata['title-dt'],
        wrapperId: head.Metadata['wrapper-id'],
        dateTimeFunc: undefined,
        titleFunc: undefined,
        keyFunc: undefined,
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
        id: "",
        pngCreateDt: "",
        quicktimeMetaCreateDt: "",
        title: "",
        titleDt: "",
        wrapperId: "",
        dateTimeFunc: undefined,
        titleFunc: undefined,
        keyFunc: undefined,
    }
}

export function mapToWrapperMetadata(wrapperId: string, imageUrl: string, objects: Metadata[]) {
    return {
        wrapperId: wrapperId,
        imageUrl: imageUrl,
        wrapperKeys: objects.map(md => md.id),
        wrapperSize: objects.length,
        wrapperObjects: objects
    }
}
