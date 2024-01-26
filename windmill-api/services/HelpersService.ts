/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolarsClientKwargs } from '../models/PolarsClientKwargs.ts';
import type { S3Resource } from '../models/S3Resource.ts';
import type { UploadFilePart } from '../models/UploadFilePart.ts';
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
     * Test connection to the workspace datasets storage
     * @returns any Connection settings
     * @throws ApiError
     */
    public static datasetStorageTestConnection({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/test_connection',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * List the file keys available in the workspace files storage (S3)
     * @returns any List of file keys
     * @throws ApiError
     */
    public static listStoredFiles({
        workspace,
        maxKeys,
        marker,
    }: {
        workspace: string,
        maxKeys: number,
        marker?: string,
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
    }: {
        workspace: string,
        fileKey: string,
    }): CancelablePromise<WindmillFileMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/load_file_metadata',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
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
    }: {
        workspace: string,
        fileKey: string,
        fileSizeInBytes?: number,
        fileMimeType?: string,
        csvSeparator?: string,
        csvHasHeader?: boolean,
        readBytesFrom?: number,
        readBytesLength?: number,
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
    }: {
        workspace: string,
        path: string,
        offset?: number,
        limit?: number,
        sortCol?: string,
        sortDesc?: boolean,
        searchCol?: string,
        searchTerm?: string,
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
            },
        });
    }

    /**
     * Generate a unique URL to download the file
     * @returns any Download URL
     * @throws ApiError
     */
    public static generateDownloadUrl({
        workspace,
        fileKey,
    }: {
        workspace: string,
        fileKey: string,
    }): CancelablePromise<{
        download_url: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/generate_download_url',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
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
    }: {
        workspace: string,
        fileKey: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/job_helpers/delete_s3_file',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
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
    }: {
        workspace: string,
        srcFileKey: string,
        destFileKey: string,
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
            },
        });
    }

    /**
     * Upload file to S3 bucket using multipart upload
     * @returns any Chunk upload status
     * @throws ApiError
     */
    public static multipartFileUpload({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Query args for a multipart file upload to S3
         */
        requestBody: {
            file_key?: string;
            file_extension?: string;
            part_content: Array<number>;
            upload_id?: string;
            parts: Array<UploadFilePart>;
            is_final: boolean;
            cancel_upload: boolean;
            s3_resource_path?: string;
            file_expiration?: string;
        },
    }): CancelablePromise<{
        upload_id: string;
        parts: Array<UploadFilePart>;
        is_done: boolean;
        file_key: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/multipart_upload_s3_file',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Download file to S3 bucket
     * @returns any Chunk of the downloaded file
     * @throws ApiError
     */
    public static multipartFileDownload({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Query args for a multipart file upload to S3
         */
        requestBody: {
            file_key: string;
            part_number: number;
            file_size?: number;
            s3_resource_path?: string;
        },
    }): CancelablePromise<{
        file_size?: number;
        part_content: Array<number>;
        next_part_number?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/multipart_download_s3_file',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
