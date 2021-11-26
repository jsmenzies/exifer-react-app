export interface Metadata {
    readonly key: string,
    readonly wrapperId: string,
    readonly title: string,
    readonly extension: string,
    readonly contentLength: string,
    readonly titleDt: string
    readonly fileModDt: string
    readonly exifId0Dt: string
    readonly exifSubId0DtDigi: string
    readonly exifSubId0DtOrig: string,
    readonly quicktimeMetaCreateDt: string
    readonly iptcCreateDt: string
    readonly iptcCreateDigiDt: string
    readonly pngCreateDt: string
    readonly gpsDt: string
}

export interface Result {
    readonly wrapperId: string,
    readonly datetime: string,
    readonly onSubmitFn: any,
}

export interface Wrapper {
    wrapperId: string,
    wrapperKeys: string[],
    wrapperSize: number,
}

export interface ImagePreview {
    imageUrl: string,
}
