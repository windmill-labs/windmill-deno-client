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
        polars_cloud_options: {
            aws_endpoint_url: string;
            aws_access_key_id?: string;
            aws_secret_access_key?: string;
            aws_region: string;
            aws_allow_http: boolean;
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
     * Converts an S3 resource to the set of arguments necessary to connect to an S3 bucket using boto3 in Python
     * @returns any Connection settings
     * @throws ApiError
     */
    public static boto3ConnectionSettingsV2({
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
        endpoint_url: string;
        region_name: string;
        use_ssl: boolean;
        aws_access_key_id?: string;
        aws_secret_access_key?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_helpers/v2/boto3_connection_settings',
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
     * List the file keys available in the worspace files storage (S3)
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

}
