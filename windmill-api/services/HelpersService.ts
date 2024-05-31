/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolarsClientKwargs } from '../models/PolarsClientKwargs.ts';
import type { S3Resource } from '../models/S3Resource.ts';
import type { WindmillFileMetadata } from '../models/WindmillFileMetadata.ts';
import type { WindmillFilePreview } from '../models/WindmillFilePreview.ts';
import type { WindmillLargeFile } from '../models/WindmillLargeFile.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class HelpersService {

    /**
     * Converts an S3 resource to the set of instructions necessary to connect DuckDB to an S3 bucket
     * @returns any Connection settings
     * @throws ApiError
     */
    public static duckdbConnectionSettings({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * S3 resource to connect to
         */
        requestBody: {
            s3_resource?: S3Resource;
        },
    }): CancelablePromise<{
        connection_settings_str?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/duckdb_connection_settings',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Converts an S3 resource to the set of instructions necessary to connect DuckDB to an S3 bucket
     * @returns any Connection settings
     * @throws ApiError
     */
    public static duckdbConnectionSettingsV2({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * S3 resource path to use to generate the connection settings. If empty, the S3 resource defined in the workspace settings will be used
         */
        requestBody: {
            s3_resource_path?: string;
        },
    }): CancelablePromise<{
        connection_settings_str: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/v2/duckdb_connection_settings',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Converts an S3 resource to the set of arguments necessary to connect Polars to an S3 bucket
     * @returns any Connection settings
     * @throws ApiError
     */
    public static polarsConnectionSettings({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * S3 resource to connect to
         */
        requestBody: {
            s3_resource?: S3Resource;
        },
    }): CancelablePromise<{
        endpoint_url: string;
        key?: string;
        secret?: string;
        use_ssl: boolean;
        cache_regions: boolean;
        client_kwargs: PolarsClientKwargs;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/polars_connection_settings',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Converts an S3 resource to the set of arguments necessary to connect Polars to an S3 bucket
     * @returns any Connection settings
     * @throws ApiError
     */
    public static polarsConnectionSettingsV2({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * S3 resource path to use to generate the connection settings. If empty, the S3 resource defined in the workspace settings will be used
         */
        requestBody: {
            s3_resource_path?: string;
        },
    }): CancelablePromise<{
        s3fs_args: {
            endpoint_url: string;
            key?: string;
            secret?: string;
            use_ssl: boolean;
            cache_regions: boolean;
            client_kwargs: PolarsClientKwargs;
        };
        storage_options: {
            aws_endpoint_url: string;
            aws_access_key_id?: string;
            aws_secret_access_key?: string;
            aws_region: string;
            aws_allow_http: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/v2/polars_connection_settings',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns the s3 resource associated to the provided path, or the workspace default S3 resource
     * @returns S3Resource Connection settings
     * @throws ApiError
     */
    public static s3ResourceInfo({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * S3 resource path to use. If empty, the S3 resource defined in the workspace settings will be used
         */
        requestBody: {
            s3_resource_path?: string;
        },
    }): CancelablePromise<S3Resource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/v2/s3_resource_info',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Test connection to the workspace object storage
     * @returns any Connection settings
     * @throws ApiError
     */
    public static datasetStorageTestConnection({
        workspace,
        storage,
    }: {
        workspace: string,
        storage?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/test_connection',
            path: {
                'workspace': workspace,
            },
            query: {
                'storage': storage,
            },
        });
    }

    /**
     * List the file keys available in a workspace object storage
     * @returns any List of file keys
     * @throws ApiError
     */
    public static listStoredFiles({
        workspace,
        maxKeys,
        marker,
        prefix,
        storage,
    }: {
        workspace: string,
        maxKeys: number,
        marker?: string,
        prefix?: string,
        storage?: string,
    }): CancelablePromise<{
        next_marker?: string;
        windmill_large_files: Array<WindmillLargeFile>;
        restricted_access?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/list_stored_files',
            path: {
                'workspace': workspace,
            },
            query: {
                'max_keys': maxKeys,
                'marker': marker,
                'prefix': prefix,
                'storage': storage,
            },
        });
    }

    /**
     * Load metadata of the file
     * @returns WindmillFileMetadata FileMetadata
     * @throws ApiError
     */
    public static loadFileMetadata({
        workspace,
        fileKey,
        storage,
    }: {
        workspace: string,
        fileKey: string,
        storage?: string,
    }): CancelablePromise<WindmillFileMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/load_file_metadata',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                'storage': storage,
            },
        });
    }

    /**
     * Load a preview of the file
     * @returns WindmillFilePreview FilePreview
     * @throws ApiError
     */
    public static loadFilePreview({
        workspace,
        fileKey,
        fileSizeInBytes,
        fileMimeType,
        csvSeparator,
        csvHasHeader,
        readBytesFrom,
        readBytesLength,
        storage,
    }: {
        workspace: string,
        fileKey: string,
        fileSizeInBytes?: number,
        fileMimeType?: string,
        csvSeparator?: string,
        csvHasHeader?: boolean,
        readBytesFrom?: number,
        readBytesLength?: number,
        storage?: string,
    }): CancelablePromise<WindmillFilePreview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/load_file_preview',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                'file_size_in_bytes': fileSizeInBytes,
                'file_mime_type': fileMimeType,
                'csv_separator': csvSeparator,
                'csv_has_header': csvHasHeader,
                'read_bytes_from': readBytesFrom,
                'read_bytes_length': readBytesLength,
                'storage': storage,
            },
        });
    }

    /**
     * Load a preview of a parquet file
     * @returns any Parquet Preview
     * @throws ApiError
     */
    public static loadParquetPreview({
        workspace,
        path,
        offset,
        limit,
        sortCol,
        sortDesc,
        searchCol,
        searchTerm,
        storage,
    }: {
        workspace: string,
        path: string,
        offset?: number,
        limit?: number,
        sortCol?: string,
        sortDesc?: boolean,
        searchCol?: string,
        searchTerm?: string,
        storage?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/load_parquet_preview/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'sort_col': sortCol,
                'sort_desc': sortDesc,
                'search_col': searchCol,
                'search_term': searchTerm,
                'storage': storage,
            },
        });
    }

    /**
     * Load a preview of a csv file
     * @returns any Csv Preview
     * @throws ApiError
     */
    public static loadCsvPreview({
        workspace,
        path,
        offset,
        limit,
        sortCol,
        sortDesc,
        searchCol,
        searchTerm,
        storage,
    }: {
        workspace: string,
        path: string,
        offset?: number,
        limit?: number,
        sortCol?: string,
        sortDesc?: boolean,
        searchCol?: string,
        searchTerm?: string,
        storage?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/load_csv_preview/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'sort_col': sortCol,
                'sort_desc': sortDesc,
                'search_col': searchCol,
                'search_term': searchTerm,
                'storage': storage,
            },
        });
    }

    /**
     * Permanently delete file from S3
     * @returns any Confirmation
     * @throws ApiError
     */
    public static deleteS3File({
        workspace,
        fileKey,
        storage,
    }: {
        workspace: string,
        fileKey: string,
        storage?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/job_helpers/delete_s3_file',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                'storage': storage,
            },
        });
    }

    /**
     * Move a S3 file from one path to the other within the same bucket
     * @returns any Confirmation
     * @throws ApiError
     */
    public static moveS3File({
        workspace,
        srcFileKey,
        destFileKey,
        storage,
    }: {
        workspace: string,
        srcFileKey: string,
        destFileKey: string,
        storage?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/move_s3_file',
            path: {
                'workspace': workspace,
            },
            query: {
                'src_file_key': srcFileKey,
                'dest_file_key': destFileKey,
                'storage': storage,
            },
        });
    }

    /**
     * Upload file to S3 bucket
     * @returns any File upload status
     * @throws ApiError
     */
    public static fileUpload({
        workspace,
        requestBody,
        fileKey,
        fileExtension,
        s3ResourcePath,
        resourceType,
        storage,
    }: {
        workspace: string,
        /**
         * File content
         */
        requestBody: Blob,
        fileKey?: string,
        fileExtension?: string,
        s3ResourcePath?: string,
        resourceType?: string,
        storage?: string,
    }): CancelablePromise<{
        file_key: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/upload_s3_file',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                'file_extension': fileExtension,
                's3_resource_path': s3ResourcePath,
                'resource_type': resourceType,
                'storage': storage,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
        });
    }

    /**
     * Download file to S3 bucket
     * @returns binary Chunk of the downloaded file
     * @throws ApiError
     */
    public static fileDownload({
        workspace,
        fileKey,
        s3ResourcePath,
        resourceType,
        storage,
    }: {
        workspace: string,
        fileKey: string,
        s3ResourcePath?: string,
        resourceType?: string,
        storage?: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/download_s3_file',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                's3_resource_path': s3ResourcePath,
                'resource_type': resourceType,
                'storage': storage,
            },
        });
    }

    /**
     * Download file to S3 bucket
     * @returns string The downloaded file
     * @throws ApiError
     */
    public static fileDownloadParquetAsCsv({
        workspace,
        fileKey,
        s3ResourcePath,
        resourceType,
    }: {
        workspace: string,
        fileKey: string,
        s3ResourcePath?: string,
        resourceType?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/download_s3_parquet_file_as_csv',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                's3_resource_path': s3ResourcePath,
                'resource_type': resourceType,
            },
        });
    }

}
