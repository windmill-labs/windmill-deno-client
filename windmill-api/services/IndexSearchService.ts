/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobSearchHit } from '../models/JobSearchHit.ts';

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

}
