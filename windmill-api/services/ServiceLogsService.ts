/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ServiceLogsService {

    /**
     * list log files ordered by timestamp
     * @returns any time
     * @throws ApiError
     */
    public static listLogFiles({
        before,
        after,
        withError,
    }: {
        /**
         * filter on started before (inclusive) timestamp
         */
        before?: string,
        /**
         * filter on created after (exclusive) timestamp
         */
        after?: string,
        withError?: boolean,
    }): CancelablePromise<Array<{
        hostname: string;
        mode: string;
        worker_group?: string;
        log_ts: string;
        file_path: string;
        ok_lines?: number;
        err_lines?: number;
        json_fmt: boolean;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service_logs/list_files',
            query: {
                'before': before,
                'after': after,
                'with_error': withError,
            },
        });
    }

    /**
     * get log file by path
     * @returns string log stream
     * @throws ApiError
     */
    public static getLogFile({
        path,
    }: {
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service_logs/get_log_file/{path}',
            path: {
                'path': path,
            },
        });
    }

}
