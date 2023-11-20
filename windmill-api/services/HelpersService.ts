/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
        requestBody: any,
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
    }: {
        workspace: string,
    }): CancelablePromise<{
        file_count: number;
        windmill_large_files: Array<WindmillLargeFile>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/list_stored_files',
            path: {
                'workspace': workspace,
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
        from,
        length,
        separator,
    }: {
        workspace: string,
        fileKey: string,
        from?: number,
        length?: number,
        separator?: string,
    }): CancelablePromise<WindmillFilePreview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_helpers/load_file_preview',
            path: {
                'workspace': workspace,
            },
            query: {
                'file_key': fileKey,
                'from': from,
                'length': length,
                'separator': separator,
            },
        });
    }

}
