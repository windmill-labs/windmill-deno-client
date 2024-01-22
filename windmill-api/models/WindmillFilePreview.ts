/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WindmillFilePreview = {
    msg?: string;
    content?: string;
    content_type: WindmillFilePreview.content_type;
};

export namespace WindmillFilePreview {

    export enum content_type {
        RAW_TEXT = 'RawText',
        CSV = 'Csv',
        PARQUET = 'Parquet',
        UNKNOWN = 'Unknown',
    }


}

