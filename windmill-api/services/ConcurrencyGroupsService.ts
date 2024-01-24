/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConcurrencyGroup } from '../models/ConcurrencyGroup.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ConcurrencyGroupsService {

    /**
     * List all concurrency groups
     * @returns ConcurrencyGroup all concurrency groups
     * @throws ApiError
     */
    public static listConcurrencyGroups(): CancelablePromise<Array<ConcurrencyGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/concurrency_groups/list',
        });
    }

    /**
     * Delete concurrency group
     * @returns any concurrency group removed
     * @throws ApiError
     */
    public static deleteConcurrencyGroup({
        concurrencyId,
    }: {
        concurrencyId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/concurrency_groups/{concurrency_id}',
            path: {
                'concurrency_id': concurrencyId,
            },
        });
    }

}
