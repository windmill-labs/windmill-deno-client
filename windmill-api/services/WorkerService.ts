/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkerPing } from '../models/WorkerPing.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class WorkerService {

    /**
     * get all instance custom tags (tags are used to dispatch jobs to different worker groups)
     * @returns string list of custom tags
     * @throws ApiError
     */
    public static getCustomTags(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/custom_tags',
        });
    }

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

    /**
     * list workers
     * @returns any a list of workers
     * @throws ApiError
     */
    public static listWorkerGroups(): CancelablePromise<Array<{
        name: string;
        config: any;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/list_worker_groups',
        });
    }

    /**
     * Update Worker Group
     * @returns string Update a worker group
     * @throws ApiError
     */
    public static updateWorkerGroup({
        name,
        requestBody,
    }: {
        name: string,
        /**
         * worker group
         */
        requestBody: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workers/worker_group/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Worker Group
     * @returns string Delete a worker group
     * @throws ApiError
     */
    public static deleteWorkerGroup({
        name,
    }: {
        name: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workers/worker_group/{name}',
            path: {
                'name': name,
            },
        });
    }

}
