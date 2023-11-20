/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WindmillFilePreview = {
    mime_type?: string;
    last_modified?: string;
    size_in_bytes?: number;
    expires?: string;
    version_id?: string;
    content_preview: {
        msg?: string;
        content?: string;
        content_type: WindmillFilePreview.content_type;
    };
};

export namespace WindmillFilePreview {

    export enum content_type {
        RAW_TEXT = 'RawText',
        CSV = 'Csv',
        PARQUET = 'Parquet',
        UNKNOWN = 'Unknown',
    }


}

