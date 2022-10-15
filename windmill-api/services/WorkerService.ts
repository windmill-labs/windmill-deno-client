/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkerPing } from '../models/WorkerPing.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class WorkerService {

    /**
     * list workers
     * @returns WorkerPing a list of workers
     * @throws ApiError
     */
    public static listWorkers({
        page,
        perPage,
    }: {
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<WorkerPing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/list',
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
