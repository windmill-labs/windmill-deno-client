/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConcurrencyGroup } from '../models/ConcurrencyGroup.ts';
import type { ConcurrencyIntervals } from '../models/ConcurrencyIntervals.ts';

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
            url: '/concurrency_groups/prune/{concurrency_id}',
            path: {
                'concurrency_id': concurrencyId,
            },
        });
    }

    /**
     * Get the concurrency key for a job that has concurrency limits enabled
     * @returns string concurrency key for given job
     * @throws ApiError
     */
    public static getConcurrencyKey({
        id,
    }: {
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/concurrency_groups/{id}/key',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get intervals of job runtime concurrency
     * @returns ConcurrencyIntervals time
     * @throws ApiError
     */
    public static getConcurrencyIntervals({
        workspace,
        concurrencyKey,
        rowLimit,
        createdBy,
        label,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        schedulePath,
        scriptHash,
        startedBefore,
        startedAfter,
        createdOrStartedBefore,
        running,
        scheduledForBeforeNow,
        createdOrStartedAfter,
        jobKinds,
        args,
        tag,
        result,
        page,
        perPage,
        isSkipped,
        isFlowStep,
        hasNullParent,
        success,
        allWorkspaces,
        isNotSchedule,
    }: {
        workspace: string,
        concurrencyKey?: string,
        rowLimit?: number,
        /**
         * mask to filter exact matching user creator
         */
        createdBy?: string,
        /**
         * mask to filter exact matching job's label (job labels are completed jobs with as a result an object containing a string in the array at key 'wm_labels')
         */
        label?: string,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * mask to filter exact matching path
         */
        scriptPathExact?: string,
        /**
         * mask to filter matching starting path
         */
        scriptPathStart?: string,
        /**
         * mask to filter by schedule path
         */
        schedulePath?: string,
        /**
         * mask to filter exact matching path
         */
        scriptHash?: string,
        /**
         * filter on started before (inclusive) timestamp
         */
        startedBefore?: string,
        /**
         * filter on started after (exclusive) timestamp
         */
        startedAfter?: string,
        /**
         * filter on created_at for non non started job and started_at otherwise before (inclusive) timestamp
         */
        createdOrStartedBefore?: string,
        /**
         * filter on running jobs
         */
        running?: boolean,
        /**
         * filter on jobs scheduled_for before now (hence waitinf for a worker)
         */
        scheduledForBeforeNow?: boolean,
        /**
         * filter on created_at for non non started job and started_at otherwise after (exclusive) timestamp
         */
        createdOrStartedAfter?: string,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
        /**
         * filter on jobs containing those args as a json subset (@> in postgres)
         */
        args?: string,
        /**
         * filter on jobs with a given tag/worker group
         */
        tag?: string,
        /**
         * filter on jobs containing those result as a json subset (@> in postgres)
         */
        result?: string,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        /**
         * is the job skipped
         */
        isSkipped?: boolean,
        /**
         * is the job a flow step
         */
        isFlowStep?: boolean,
        /**
         * has null parent
         */
        hasNullParent?: boolean,
        /**
         * filter on successful jobs
         */
        success?: boolean,
        /**
         * get jobs from all workspaces (only valid if request come from the `admins` workspace)
         */
        allWorkspaces?: boolean,
        /**
         * is not a scheduled job
         */
        isNotSchedule?: boolean,
    }): CancelablePromise<ConcurrencyIntervals> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/concurrency_groups/intervals',
            path: {
                'workspace': workspace,
            },
            query: {
                'concurrency_key': concurrencyKey,
                'row_limit': rowLimit,
                'created_by': createdBy,
                'label': label,
                'parent_job': parentJob,
                'script_path_exact': scriptPathExact,
                'script_path_start': scriptPathStart,
                'schedule_path': schedulePath,
                'script_hash': scriptHash,
                'started_before': startedBefore,
                'started_after': startedAfter,
                'created_or_started_before': createdOrStartedBefore,
                'running': running,
                'scheduled_for_before_now': scheduledForBeforeNow,
                'created_or_started_after': createdOrStartedAfter,
                'job_kinds': jobKinds,
                'args': args,
                'tag': tag,
                'result': result,
                'page': page,
                'per_page': perPage,
                'is_skipped': isSkipped,
                'is_flow_step': isFlowStep,
                'has_null_parent': hasNullParent,
                'success': success,
                'all_workspaces': allWorkspaces,
                'is_not_schedule': isNotSchedule,
            },
        });
    }

}
