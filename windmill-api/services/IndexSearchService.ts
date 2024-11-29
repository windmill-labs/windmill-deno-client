/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobSearchHit } from '../models/JobSearchHit.ts';
import type { LogSearchHit } from '../models/LogSearchHit.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class IndexSearchService {

    /**
     * Search through jobs with a string query
     * @returns any search results
     * @throws ApiError
     */
    public static searchJobsIndex({
        workspace,
        searchQuery,
    }: {
        workspace: string,
        searchQuery: string,
    }): CancelablePromise<{
        /**
         * a list of the terms that couldn't be parsed (and thus ignored)
         */
        query_parse_errors?: Array<{
            dancer?: string;
        }>;
        /**
         * the jobs that matched the query
         */
        hits?: Array<JobSearchHit>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/srch/w/{workspace}/index/search/job',
            path: {
                'workspace': workspace,
            },
            query: {
                'search_query': searchQuery,
            },
        });
    }

    /**
     * Search through service logs with a string query
     * @returns any search results
     * @throws ApiError
     */
    public static searchLogsIndex({
        searchQuery,
        mode,
        hostname,
        workerGroup,
        minTs,
        maxTs,
    }: {
        searchQuery: string,
        mode: string,
        hostname: string,
        workerGroup?: string,
        minTs?: string,
        maxTs?: string,
    }): CancelablePromise<{
        /**
         * a list of the terms that couldn't be parsed (and thus ignored)
         */
        query_parse_errors?: Array<string>;
        /**
         * log files that matched the query
         */
        hits?: Array<LogSearchHit>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/srch/index/search/service_logs',
            query: {
                'search_query': searchQuery,
                'mode': mode,
                'worker_group': workerGroup,
                'hostname': hostname,
                'min_ts': minTs,
                'max_ts': maxTs,
            },
        });
    }

    /**
     * Search and count the log line hits on every provided host
     * @returns any search results
     * @throws ApiError
     */
    public static countSearchLogsIndex({
        searchQuery,
        minTs,
        maxTs,
    }: {
        searchQuery: string,
        minTs?: string,
        maxTs?: string,
    }): CancelablePromise<{
        /**
         * a list of the terms that couldn't be parsed (and thus ignored)
         */
        query_parse_errors?: Array<string>;
        /**
         * count of log lines that matched the query per hostname
         */
        count_per_host?: any;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/srch/index/search/count_service_logs',
            query: {
                'search_query': searchQuery,
                'min_ts': minTs,
                'max_ts': maxTs,
            },
        });
    }

    /**
     * Restart container and delete the index to recreate it.
     * @returns string idx to be deleted and container restarting
     * @throws ApiError
     */
    public static clearIndex({
        idxName,
    }: {
        idxName: 'JobIndex' | 'ServiceLogIndex',
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/srch/index/delete/{idx_name}',
            path: {
                'idx_name': idxName,
            },
        });
    }

}
