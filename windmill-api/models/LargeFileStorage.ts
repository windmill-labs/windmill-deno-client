/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LargeFileStorage = {
    type?: LargeFileStorage.type;
    s3_resource_path?: string;
    azure_blob_resource_path?: string;
    public_resource?: boolean;
    secondary_storage?: Record<string, {
        type?: 'S3Storage' | 'AzureBlobStorage' | 'AzureWorkloadIdentity' | 'S3AwsOidc';
        s3_resource_path?: string;
        azure_blob_resource_path?: string;
        public_resource?: boolean;
    }>;
};

export namespace LargeFileStorage {

    export enum type {
        S3STORAGE = 'S3Storage',
        AZURE_BLOB_STORAGE = 'AzureBlobStorage',
        AZURE_WORKLOAD_IDENTITY = 'AzureWorkloadIdentity',
        S3AWS_OIDC = 'S3AwsOidc',
    }


}

