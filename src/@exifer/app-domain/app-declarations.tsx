export interface WrapperMetadata {
    readonly wrapperId: string
    readonly wrapperSize: number
    readonly wrapperKeys: string[]
    readonly wrapperObjects: Metadata []
    readonly imageUrl: string
}

export interface Metadata {
    readonly key: string
    readonly wrapperId: string
    readonly title: string
    readonly extension: string
    readonly contentLength: string
    readonly titleDt: string
    readonly fileModDt: string
    readonly exifId0Dt: string
    readonly exifSubId0DtDigi: string
    readonly exifSubId0DtOrig: string
    readonly quicktimeMetaCreateDt: string
    readonly iptcCreateDt: string
    readonly iptcCreateDigiDt: string
    readonly pngCreateDt: string
    readonly gpsDt: string
    readonly func: any
}

export interface Result {
    readonly wrapperId: string
    readonly datetime: string
    readonly onSubmitFn: any,
}

export interface Update {
    readonly dateTime: string,
    readonly labels: string[]
}

export interface WrapperInfo {
    readonly wrapperId: string
    readonly wrapperKeys: string[]
    readonly wrapperSize: number
}

export interface ImagePreview {
    imageUrl: string
}

export interface DTValue {
    readonly name: string
    readonly value: string
    onClickFn: any
}

export interface WrapperUpdate {
    readonly wrapperId: string
    readonly finalDateTime: string,
    readonly labels: string[]
}
