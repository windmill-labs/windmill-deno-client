/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3Resource = {
    bucket: string;
    region: string;
    endPoint: string;
    useSSL: boolean;
    accessKey?: string;
    secretKey?: string;
    pathStyle: boolean;
};

