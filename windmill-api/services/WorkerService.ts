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
    public static getCustomTags({
        workspace,
        showWorkspaceRestriction,
    }: {
        workspace?: string,
        showWorkspaceRestriction?: boolean,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/custom_tags',
            query: {
                'workspace': workspace,
                'show_workspace_restriction': showWorkspaceRestriction,
            },
        });
    }

    /**
     * get all instance default tags
     * @returns string list of default tags
     * @throws ApiError
     */
    public static geDefaultTags(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/get_default_tags',
        });
    }

    /**
     * is default tags per workspace
     * @returns boolean is the default tags per workspace
     * @throws ApiError
     */
    public static isDefaultTagsPerWorkspace(): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/is_default_tags_per_workspace',
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
        pingSince,
    }: {
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        /**
         * number of seconds the worker must have had a last ping more recent of (default to 300)
         */
        pingSince?: number,
    }): CancelablePromise<Array<WorkerPing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/list',
            query: {
                'page': page,
                'per_page': perPage,
                'ping_since': pingSince,
            },
        });
    }

    /**
     * exists worker with tag
     * @returns boolean whether a worker with the tag exists
     * @throws ApiError
     */
    public static existsWorkerWithTag({
        tag,
    }: {
        tag: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/exists_worker_with_tag',
            query: {
                'tag': tag,
            },
        });
    }

    /**
     * get queue metrics
     * @returns any metrics
     * @throws ApiError
     */
    public static getQueueMetrics(): CancelablePromise<Array<{
        id: string;
        values: Array<{
            created_at: string;
            value: number;
        }>;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/queue_metrics',
        });
    }

    /**
     * get counts of jobs waiting for an executor per tag
     * @returns number queue counts
     * @throws ApiError
     */
    public static getCountsOfJobsWaitingPerTag(): CancelablePromise<Record<string, number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workers/queue_counts',
        });
    }

}
