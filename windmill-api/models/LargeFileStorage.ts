/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LargeFileStorage = {
    type?: LargeFileStorage.type;
    s3_resource_path?: string;
};

export namespace LargeFileStorage {

    export enum type {
        S3STORAGE = 'S3Storage',
    }


}

