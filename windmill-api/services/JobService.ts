/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompletedJob } from '../models/CompletedJob.ts';
import type { ExtendedJobs } from '../models/ExtendedJobs.ts';
import type { FlowPreview } from '../models/FlowPreview.ts';
import type { Job } from '../models/Job.ts';
import type { Preview } from '../models/Preview.ts';
import type { QueuedJob } from '../models/QueuedJob.ts';
import type { RawScriptForDependencies } from '../models/RawScriptForDependencies.ts';
import type { ScriptArgs } from '../models/ScriptArgs.ts';
import type { WorkflowStatusRecord } from '../models/WorkflowStatusRecord.ts';
import type { WorkflowTask } from '../models/WorkflowTask.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class JobService {

    /**
     * run script by path
     * @returns string job created
     * @throws ApiError
     */
    public static runScriptByPath({
        workspace,
        path,
        requestBody,
        scheduledFor,
        scheduledInSecs,
        skipPreprocessor,
        parentJob,
        tag,
        cacheTtl,
        jobId,
        invisibleToOwner,
    }: {
        workspace: string,
        path: string,
        /**
         * script args
         */
        requestBody: ScriptArgs,
        /**
         * when to schedule this job (leave empty for immediate run)
         */
        scheduledFor?: string,
        /**
         * schedule the script to execute in the number of seconds starting now
         */
        scheduledInSecs?: number,
        /**
         * skip the preprocessor
         */
        skipPreprocessor?: boolean,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * Override the tag to use
         */
        tag?: string,
        /**
         * Override the cache time to live (in seconds). Can not be used to disable caching, only override with a new cache ttl
         */
        cacheTtl?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * make the run invisible to the the script owner (default false)
         */
        invisibleToOwner?: boolean,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'scheduled_for': scheduledFor,
                'scheduled_in_secs': scheduledInSecs,
                'skip_preprocessor': skipPreprocessor,
                'parent_job': parentJob,
                'tag': tag,
                'cache_ttl': cacheTtl,
                'job_id': jobId,
                'invisible_to_owner': invisibleToOwner,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run script by path in openai format
     * @returns any job result
     * @throws ApiError
     */
    public static openaiSyncScriptByPath({
        workspace,
        path,
        requestBody,
        parentJob,
        jobId,
        includeHeader,
        queueLimit,
    }: {
        workspace: string,
        path: string,
        /**
         * script args
         */
        requestBody: ScriptArgs,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * The maximum size of the queue for which the request would get rejected if that job would push it above that limit
         *
         */
        queueLimit?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/openai_sync/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'parent_job': parentJob,
                'job_id': jobId,
                'include_header': includeHeader,
                'queue_limit': queueLimit,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run script by path
     * @returns any job result
     * @throws ApiError
     */
    public static runWaitResultScriptByPath({
        workspace,
        path,
        requestBody,
        parentJob,
        tag,
        cacheTtl,
        jobId,
        includeHeader,
        queueLimit,
    }: {
        workspace: string,
        path: string,
        /**
         * script args
         */
        requestBody: ScriptArgs,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * Override the tag to use
         */
        tag?: string,
        /**
         * Override the cache time to live (in seconds). Can not be used to disable caching, only override with a new cache ttl
         */
        cacheTtl?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * The maximum size of the queue for which the request would get rejected if that job would push it above that limit
         *
         */
        queueLimit?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run_wait_result/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'parent_job': parentJob,
                'tag': tag,
                'cache_ttl': cacheTtl,
                'job_id': jobId,
                'include_header': includeHeader,
                'queue_limit': queueLimit,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run script by path with get
     * @returns any job result
     * @throws ApiError
     */
    public static runWaitResultScriptByPathGet({
        workspace,
        path,
        parentJob,
        tag,
        cacheTtl,
        jobId,
        includeHeader,
        queueLimit,
        payload,
    }: {
        workspace: string,
        path: string,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * Override the tag to use
         */
        tag?: string,
        /**
         * Override the cache time to live (in seconds). Can not be used to disable caching, only override with a new cache ttl
         */
        cacheTtl?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * The maximum size of the queue for which the request would get rejected if that job would push it above that limit
         *
         */
        queueLimit?: string,
        /**
         * The base64 encoded payload that has been encoded as a JSON. e.g how to encode such payload encodeURIComponent
         * `encodeURIComponent(btoa(JSON.stringify({a: 2})))`
         *
         */
        payload?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/run_wait_result/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'parent_job': parentJob,
                'tag': tag,
                'cache_ttl': cacheTtl,
                'job_id': jobId,
                'include_header': includeHeader,
                'queue_limit': queueLimit,
                'payload': payload,
            },
        });
    }

    /**
     * run flow by path and wait until completion in openai format
     * @returns any job result
     * @throws ApiError
     */
    public static openaiSyncFlowByPath({
        workspace,
        path,
        requestBody,
        includeHeader,
        queueLimit,
        jobId,
    }: {
        workspace: string,
        path: string,
        /**
         * script args
         */
        requestBody: ScriptArgs,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * The maximum size of the queue for which the request would get rejected if that job would push it above that limit
         *
         */
        queueLimit?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/openai_sync/f/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'include_header': includeHeader,
                'queue_limit': queueLimit,
                'job_id': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run flow by path and wait until completion
     * @returns any job result
     * @throws ApiError
     */
    public static runWaitResultFlowByPath({
        workspace,
        path,
        requestBody,
        includeHeader,
        queueLimit,
        jobId,
    }: {
        workspace: string,
        path: string,
        /**
         * script args
         */
        requestBody: ScriptArgs,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * The maximum size of the queue for which the request would get rejected if that job would push it above that limit
         *
         */
        queueLimit?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run_wait_result/f/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'include_header': includeHeader,
                'queue_limit': queueLimit,
                'job_id': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get job result by id
     * @returns any job result
     * @throws ApiError
     */
    public static resultById({
        workspace,
        flowJobId,
        nodeId,
    }: {
        workspace: string,
        flowJobId: string,
        nodeId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/result_by_id/{flow_job_id}/{node_id}',
            path: {
                'workspace': workspace,
                'flow_job_id': flowJobId,
                'node_id': nodeId,
            },
        });
    }

    /**
     * run flow by path
     * @returns string job created
     * @throws ApiError
     */
    public static runFlowByPath({
        workspace,
        path,
        requestBody,
        scheduledFor,
        scheduledInSecs,
        skipPreprocessor,
        parentJob,
        tag,
        jobId,
        includeHeader,
        invisibleToOwner,
    }: {
        workspace: string,
        path: string,
        /**
         * flow args
         */
        requestBody: ScriptArgs,
        /**
         * when to schedule this job (leave empty for immediate run)
         */
        scheduledFor?: string,
        /**
         * schedule the script to execute in the number of seconds starting now
         */
        scheduledInSecs?: number,
        /**
         * skip the preprocessor
         */
        skipPreprocessor?: boolean,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * Override the tag to use
         */
        tag?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * make the run invisible to the the flow owner (default false)
         */
        invisibleToOwner?: boolean,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/f/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'scheduled_for': scheduledFor,
                'scheduled_in_secs': scheduledInSecs,
                'skip_preprocessor': skipPreprocessor,
                'parent_job': parentJob,
                'tag': tag,
                'job_id': jobId,
                'include_header': includeHeader,
                'invisible_to_owner': invisibleToOwner,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * restart a completed flow at a given step
     * @returns string job created
     * @throws ApiError
     */
    public static restartFlowAtStep({
        workspace,
        id,
        stepId,
        branchOrIterationN,
        requestBody,
        scheduledFor,
        scheduledInSecs,
        parentJob,
        tag,
        jobId,
        includeHeader,
        invisibleToOwner,
    }: {
        workspace: string,
        id: string,
        /**
         * step id to restart the flow from
         */
        stepId: string,
        /**
         * for branchall or loop, the iteration at which the flow should restart
         */
        branchOrIterationN: number,
        /**
         * flow args
         */
        requestBody: ScriptArgs,
        /**
         * when to schedule this job (leave empty for immediate run)
         */
        scheduledFor?: string,
        /**
         * schedule the script to execute in the number of seconds starting now
         */
        scheduledInSecs?: number,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * Override the tag to use
         */
        tag?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * make the run invisible to the the flow owner (default false)
         */
        invisibleToOwner?: boolean,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/restart/f/{id}/from/{step_id}/{branch_or_iteration_n}',
            path: {
                'workspace': workspace,
                'id': id,
                'step_id': stepId,
                'branch_or_iteration_n': branchOrIterationN,
            },
            query: {
                'scheduled_for': scheduledFor,
                'scheduled_in_secs': scheduledInSecs,
                'parent_job': parentJob,
                'tag': tag,
                'job_id': jobId,
                'include_header': includeHeader,
                'invisible_to_owner': invisibleToOwner,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run script by hash
     * @returns string job created
     * @throws ApiError
     */
    public static runScriptByHash({
        workspace,
        hash,
        requestBody,
        scheduledFor,
        scheduledInSecs,
        skipPreprocessor,
        parentJob,
        tag,
        cacheTtl,
        jobId,
        includeHeader,
        invisibleToOwner,
    }: {
        workspace: string,
        hash: string,
        /**
         * Partially filled args
         */
        requestBody: any,
        /**
         * when to schedule this job (leave empty for immediate run)
         */
        scheduledFor?: string,
        /**
         * schedule the script to execute in the number of seconds starting now
         */
        scheduledInSecs?: number,
        /**
         * skip the preprocessor
         */
        skipPreprocessor?: boolean,
        /**
         * The parent job that is at the origin and responsible for the execution of this script if any
         */
        parentJob?: string,
        /**
         * Override the tag to use
         */
        tag?: string,
        /**
         * Override the cache time to live (in seconds). Can not be used to disable caching, only override with a new cache ttl
         */
        cacheTtl?: string,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * make the run invisible to the the script owner (default false)
         */
        invisibleToOwner?: boolean,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/h/{hash}',
            path: {
                'workspace': workspace,
                'hash': hash,
            },
            query: {
                'scheduled_for': scheduledFor,
                'scheduled_in_secs': scheduledInSecs,
                'skip_preprocessor': skipPreprocessor,
                'parent_job': parentJob,
                'tag': tag,
                'cache_ttl': cacheTtl,
                'job_id': jobId,
                'include_header': includeHeader,
                'invisible_to_owner': invisibleToOwner,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run script preview
     * @returns string job created
     * @throws ApiError
     */
    public static runScriptPreview({
        workspace,
        requestBody,
        includeHeader,
        invisibleToOwner,
        jobId,
    }: {
        workspace: string,
        /**
         * preview
         */
        requestBody: Preview,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * make the run invisible to the the script owner (default false)
         */
        invisibleToOwner?: boolean,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/preview',
            path: {
                'workspace': workspace,
            },
            query: {
                'include_header': includeHeader,
                'invisible_to_owner': invisibleToOwner,
                'job_id': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run code-workflow task
     * @returns string job created
     * @throws ApiError
     */
    public static runCodeWorkflowTask({
        workspace,
        jobId,
        entrypoint,
        requestBody,
    }: {
        workspace: string,
        jobId: string,
        entrypoint: string,
        /**
         * preview
         */
        requestBody: WorkflowTask,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/workflow_as_code/{job_id}/{entrypoint}',
            path: {
                'workspace': workspace,
                'job_id': jobId,
                'entrypoint': entrypoint,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run a one-off dependencies job
     * @returns any dependency job result
     * @throws ApiError
     */
    public static runRawScriptDependencies({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * raw script content
         */
        requestBody: {
            raw_scripts: Array<RawScriptForDependencies>;
            entrypoint: string;
        },
    }): CancelablePromise<{
        lock: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/dependencies',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * run flow preview
     * @returns string job created
     * @throws ApiError
     */
    public static runFlowPreview({
        workspace,
        requestBody,
        includeHeader,
        invisibleToOwner,
        jobId,
    }: {
        workspace: string,
        /**
         * preview
         */
        requestBody: FlowPreview,
        /**
         * List of headers's keys (separated with ',') whove value are added to the args
         * Header's key lowercased and '-'' replaced to '_' such that 'Content-Type' becomes the 'content_type' arg key
         *
         */
        includeHeader?: string,
        /**
         * make the run invisible to the the script owner (default false)
         */
        invisibleToOwner?: boolean,
        /**
         * The job id to assign to the created job. if missing, job is chosen randomly using the ULID scheme. If a job id already exists in the queue or as a completed job, the request to create one will fail (Bad Request)
         */
        jobId?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/preview_flow',
            path: {
                'workspace': workspace,
            },
            query: {
                'include_header': includeHeader,
                'invisible_to_owner': invisibleToOwner,
                'job_id': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list all queued jobs
     * @returns QueuedJob All queued jobs
     * @throws ApiError
     */
    public static listQueue({
        workspace,
        orderDesc,
        createdBy,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        schedulePath,
        scriptHash,
        startedBefore,
        startedAfter,
        success,
        scheduledForBeforeNow,
        jobKinds,
        suspended,
        running,
        args,
        result,
        tag,
        page,
        perPage,
        allWorkspaces,
        isNotSchedule,
    }: {
        workspace: string,
        /**
         * order by desc order (default true)
         */
        orderDesc?: boolean,
        /**
         * mask to filter exact matching user creator
         */
        createdBy?: string,
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
         * filter on successful jobs
         */
        success?: boolean,
        /**
         * filter on jobs scheduled_for before now (hence waitinf for a worker)
         */
        scheduledForBeforeNow?: boolean,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
        /**
         * filter on suspended jobs
         */
        suspended?: boolean,
        /**
         * filter on running jobs
         */
        running?: boolean,
        /**
         * filter on jobs containing those args as a json subset (@> in postgres)
         */
        args?: string,
        /**
         * filter on jobs containing those result as a json subset (@> in postgres)
         */
        result?: string,
        /**
         * filter on jobs with a given tag/worker group
         */
        tag?: string,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        /**
         * get jobs from all workspaces (only valid if request come from the `admins` workspace)
         */
        allWorkspaces?: boolean,
        /**
         * is not a scheduled job
         */
        isNotSchedule?: boolean,
    }): CancelablePromise<Array<QueuedJob>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/queue/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'order_desc': orderDesc,
                'created_by': createdBy,
                'parent_job': parentJob,
                'script_path_exact': scriptPathExact,
                'script_path_start': scriptPathStart,
                'schedule_path': schedulePath,
                'script_hash': scriptHash,
                'started_before': startedBefore,
                'started_after': startedAfter,
                'success': success,
                'scheduled_for_before_now': scheduledForBeforeNow,
                'job_kinds': jobKinds,
                'suspended': suspended,
                'running': running,
                'args': args,
                'result': result,
                'tag': tag,
                'page': page,
                'per_page': perPage,
                'all_workspaces': allWorkspaces,
                'is_not_schedule': isNotSchedule,
            },
        });
    }

    /**
     * get queue count
     * @returns any queue count
     * @throws ApiError
     */
    public static getQueueCount({
        workspace,
        allWorkspaces,
    }: {
        workspace: string,
        /**
         * get jobs from all workspaces (only valid if request come from the `admins` workspace)
         */
        allWorkspaces?: boolean,
    }): CancelablePromise<{
        database_length: number;
        suspended?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/queue/count',
            path: {
                'workspace': workspace,
            },
            query: {
                'all_workspaces': allWorkspaces,
            },
        });
    }

    /**
     * get completed count
     * @returns any completed count
     * @throws ApiError
     */
    public static getCompletedCount({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        database_length: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/completed/count',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * count number of completed jobs with filter
     * @returns number Count of completed jobs
     * @throws ApiError
     */
    public static countCompletedJobs({
        workspace,
        completedAfterSAgo,
        success,
        tags,
        allWorkspaces,
    }: {
        workspace: string,
        completedAfterSAgo?: number,
        success?: boolean,
        tags?: string,
        allWorkspaces?: boolean,
    }): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/completed/count_jobs',
            path: {
                'workspace': workspace,
            },
            query: {
                'completed_after_s_ago': completedAfterSAgo,
                'success': success,
                'tags': tags,
                'all_workspaces': allWorkspaces,
            },
        });
    }

    /**
     * get the ids of all jobs matching the given filters
     * @returns string uuids of jobs
     * @throws ApiError
     */
    public static listFilteredUuids({
        workspace,
        orderDesc,
        createdBy,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        schedulePath,
        scriptHash,
        startedBefore,
        startedAfter,
        success,
        scheduledForBeforeNow,
        jobKinds,
        suspended,
        running,
        args,
        result,
        tag,
        page,
        perPage,
        concurrencyKey,
        allWorkspaces,
        isNotSchedule,
    }: {
        workspace: string,
        /**
         * order by desc order (default true)
         */
        orderDesc?: boolean,
        /**
         * mask to filter exact matching user creator
         */
        createdBy?: string,
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
         * filter on successful jobs
         */
        success?: boolean,
        /**
         * filter on jobs scheduled_for before now (hence waitinf for a worker)
         */
        scheduledForBeforeNow?: boolean,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
        /**
         * filter on suspended jobs
         */
        suspended?: boolean,
        /**
         * filter on running jobs
         */
        running?: boolean,
        /**
         * filter on jobs containing those args as a json subset (@> in postgres)
         */
        args?: string,
        /**
         * filter on jobs containing those result as a json subset (@> in postgres)
         */
        result?: string,
        /**
         * filter on jobs with a given tag/worker group
         */
        tag?: string,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        concurrencyKey?: string,
        /**
         * get jobs from all workspaces (only valid if request come from the `admins` workspace)
         */
        allWorkspaces?: boolean,
        /**
         * is not a scheduled job
         */
        isNotSchedule?: boolean,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/queue/list_filtered_uuids',
            path: {
                'workspace': workspace,
            },
            query: {
                'order_desc': orderDesc,
                'created_by': createdBy,
                'parent_job': parentJob,
                'script_path_exact': scriptPathExact,
                'script_path_start': scriptPathStart,
                'schedule_path': schedulePath,
                'script_hash': scriptHash,
                'started_before': startedBefore,
                'started_after': startedAfter,
                'success': success,
                'scheduled_for_before_now': scheduledForBeforeNow,
                'job_kinds': jobKinds,
                'suspended': suspended,
                'running': running,
                'args': args,
                'result': result,
                'tag': tag,
                'page': page,
                'per_page': perPage,
                'concurrency_key': concurrencyKey,
                'all_workspaces': allWorkspaces,
                'is_not_schedule': isNotSchedule,
            },
        });
    }

    /**
     * cancel jobs based on the given uuids
     * @returns string uuids of canceled jobs
     * @throws ApiError
     */
    public static cancelSelection({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * uuids of the jobs to cancel
         */
        requestBody: Array<string>,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/queue/cancel_selection',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list all completed jobs
     * @returns CompletedJob All completed jobs
     * @throws ApiError
     */
    public static listCompletedJobs({
        workspace,
        orderDesc,
        createdBy,
        label,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        schedulePath,
        scriptHash,
        startedBefore,
        startedAfter,
        success,
        jobKinds,
        args,
        result,
        tag,
        page,
        perPage,
        isSkipped,
        isFlowStep,
        hasNullParent,
        isNotSchedule,
    }: {
        workspace: string,
        /**
         * order by desc order (default true)
         */
        orderDesc?: boolean,
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
         * filter on successful jobs
         */
        success?: boolean,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
        /**
         * filter on jobs containing those args as a json subset (@> in postgres)
         */
        args?: string,
        /**
         * filter on jobs containing those result as a json subset (@> in postgres)
         */
        result?: string,
        /**
         * filter on jobs with a given tag/worker group
         */
        tag?: string,
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
         * is not a scheduled job
         */
        isNotSchedule?: boolean,
    }): CancelablePromise<Array<CompletedJob>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/completed/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'order_desc': orderDesc,
                'created_by': createdBy,
                'label': label,
                'parent_job': parentJob,
                'script_path_exact': scriptPathExact,
                'script_path_start': scriptPathStart,
                'schedule_path': schedulePath,
                'script_hash': scriptHash,
                'started_before': startedBefore,
                'started_after': startedAfter,
                'success': success,
                'job_kinds': jobKinds,
                'args': args,
                'result': result,
                'tag': tag,
                'page': page,
                'per_page': perPage,
                'is_skipped': isSkipped,
                'is_flow_step': isFlowStep,
                'has_null_parent': hasNullParent,
                'is_not_schedule': isNotSchedule,
            },
        });
    }

    /**
     * list all jobs
     * @returns Job All jobs
     * @throws ApiError
     */
    public static listJobs({
        workspace,
        createdBy,
        label,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        schedulePath,
        scriptHash,
        startedBefore,
        startedAfter,
        createdBefore,
        createdAfter,
        createdOrStartedBefore,
        running,
        scheduledForBeforeNow,
        createdOrStartedAfter,
        createdOrStartedAfterCompletedJobs,
        jobKinds,
        suspended,
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
         * filter on created before (inclusive) timestamp
         */
        createdBefore?: string,
        /**
         * filter on created after (exclusive) timestamp
         */
        createdAfter?: string,
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
         * filter on created_at for non non started job and started_at otherwise after (exclusive) timestamp but only for the completed jobs
         */
        createdOrStartedAfterCompletedJobs?: string,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
        /**
         * filter on suspended jobs
         */
        suspended?: boolean,
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
    }): CancelablePromise<Array<Job>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'created_by': createdBy,
                'label': label,
                'parent_job': parentJob,
                'script_path_exact': scriptPathExact,
                'script_path_start': scriptPathStart,
                'schedule_path': schedulePath,
                'script_hash': scriptHash,
                'started_before': startedBefore,
                'started_after': startedAfter,
                'created_before': createdBefore,
                'created_after': createdAfter,
                'created_or_started_before': createdOrStartedBefore,
                'running': running,
                'scheduled_for_before_now': scheduledForBeforeNow,
                'created_or_started_after': createdOrStartedAfter,
                'created_or_started_after_completed_jobs': createdOrStartedAfterCompletedJobs,
                'job_kinds': jobKinds,
                'suspended': suspended,
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

    /**
     * get db clock
     * @returns number the timestamp of the db that can be used to compute the drift
     * @throws ApiError
     */
    public static getDbClock(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobs/db_clock',
        });
    }

    /**
     * Count jobs by tag
     * @returns any Job counts by tag
     * @throws ApiError
     */
    public static countJobsByTag({
        horizonSecs,
        workspaceId,
    }: {
        /**
         * Past Time horizon in seconds (when to start the count = now - horizon) (default is 3600)
         */
        horizonSecs?: number,
        /**
         * Specific workspace ID to filter results (optional)
         */
        workspaceId?: string,
    }): CancelablePromise<Array<{
        tag: string;
        count: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/jobs/completed/count_by_tag',
            query: {
                'horizon_secs': horizonSecs,
                'workspace_id': workspaceId,
            },
        });
    }

    /**
     * get job
     * @returns Job job details
     * @throws ApiError
     */
    public static getJob({
        workspace,
        id,
        noLogs,
    }: {
        workspace: string,
        id: string,
        noLogs?: boolean,
    }): CancelablePromise<Job> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            query: {
                'no_logs': noLogs,
            },
        });
    }

    /**
     * get root job id
     * @returns string get root job id
     * @throws ApiError
     */
    public static getRootJobId({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get_root_job_id/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * get job logs
     * @returns string job details
     * @throws ApiError
     */
    public static getJobLogs({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get_logs/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * get job args
     * @returns any job args
     * @throws ApiError
     */
    public static getJobArgs({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get_args/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * get job updates
     * @returns any job details
     * @throws ApiError
     */
    public static getJobUpdates({
        workspace,
        id,
        running,
        logOffset,
        getProgress,
    }: {
        workspace: string,
        id: string,
        running?: boolean,
        logOffset?: number,
        getProgress?: boolean,
    }): CancelablePromise<{
        running?: boolean;
        completed?: boolean;
        new_logs?: string;
        log_offset?: number;
        mem_peak?: number;
        progress?: number;
        flow_status?: WorkflowStatusRecord;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/getupdate/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            query: {
                'running': running,
                'log_offset': logOffset,
                'get_progress': getProgress,
            },
        });
    }

    /**
     * get log file from object store
     * @returns any job log
     * @throws ApiError
     */
    public static getLogFileFromStore({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get_log_file/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get flow debug info
     * @returns any flow debug info details
     * @throws ApiError
     */
    public static getFlowDebugInfo({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get_flow_debug_info/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * get completed job
     * @returns CompletedJob job details
     * @throws ApiError
     */
    public static getCompletedJob({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<CompletedJob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/completed/get/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * get completed job result
     * @returns any result
     * @throws ApiError
     */
    public static getCompletedJobResult({
        workspace,
        id,
        suspendedJob,
        resumeId,
        secret,
        approver,
    }: {
        workspace: string,
        id: string,
        suspendedJob?: string,
        resumeId?: number,
        secret?: string,
        approver?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/completed/get_result/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            query: {
                'suspended_job': suspendedJob,
                'resume_id': resumeId,
                'secret': secret,
                'approver': approver,
            },
        });
    }

    /**
     * get completed job result if job is completed
     * @returns any result
     * @throws ApiError
     */
    public static getCompletedJobResultMaybe({
        workspace,
        id,
        getStarted,
    }: {
        workspace: string,
        id: string,
        getStarted?: boolean,
    }): CancelablePromise<{
        completed: boolean;
        result: any;
        success?: boolean;
        started?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/completed/get_result_maybe/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            query: {
                'get_started': getStarted,
            },
        });
    }

    /**
     * delete completed job (erase content but keep run id)
     * @returns CompletedJob job details
     * @throws ApiError
     */
    public static deleteCompletedJob({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<CompletedJob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/completed/delete/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * cancel queued or running job
     * @returns string job canceled
     * @throws ApiError
     */
    public static cancelQueuedJob({
        workspace,
        id,
        requestBody,
    }: {
        workspace: string,
        id: string,
        /**
         * reason
         */
        requestBody: {
            reason?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs_u/queue/cancel/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * cancel all queued jobs for persistent script
     * @returns string persistent job scaled down to zero
     * @throws ApiError
     */
    public static cancelPersistentQueuedJobs({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * reason
         */
        requestBody: {
            reason?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs_u/queue/cancel_persistent/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * force cancel queued job
     * @returns string job canceled
     * @throws ApiError
     */
    public static forceCancelQueuedJob({
        workspace,
        id,
        requestBody,
    }: {
        workspace: string,
        id: string,
        /**
         * reason
         */
        requestBody: {
            reason?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs_u/queue/force_cancel/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * create an HMac signature given a job id and a resume id
     * @returns string job signature
     * @throws ApiError
     */
    public static createJobSignature({
        workspace,
        id,
        resumeId,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        approver?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/job_signature/{id}/{resume_id}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
            },
            query: {
                'approver': approver,
            },
        });
    }

    /**
     * get resume urls given a job_id, resume_id and a nonce to resume a flow
     * @returns any url endpoints
     * @throws ApiError
     */
    public static getResumeUrls({
        workspace,
        id,
        resumeId,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        approver?: string,
    }): CancelablePromise<{
        approvalPage: string;
        resume: string;
        cancel: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/resume_urls/{id}/{resume_id}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
            },
            query: {
                'approver': approver,
            },
        });
    }

    /**
     * generate interactive slack approval for suspended job
     * @returns any Interactive slack approval message sent successfully
     * @throws ApiError
     */
    public static getSlackApprovalPayload({
        workspace,
        id,
        slackResourcePath,
        channelId,
        flowStepId,
        approver,
        message,
        defaultArgsJson,
        dynamicEnumsJson,
    }: {
        workspace: string,
        id: string,
        slackResourcePath: string,
        channelId: string,
        flowStepId: string,
        approver?: string,
        message?: string,
        defaultArgsJson?: string,
        dynamicEnumsJson?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/slack_approval/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            query: {
                'approver': approver,
                'message': message,
                'slack_resource_path': slackResourcePath,
                'channel_id': channelId,
                'flow_step_id': flowStepId,
                'default_args_json': defaultArgsJson,
                'dynamic_enums_json': dynamicEnumsJson,
            },
        });
    }

    /**
     * resume a job for a suspended flow
     * @returns string job resumed
     * @throws ApiError
     */
    public static resumeSuspendedJobGet({
        workspace,
        id,
        resumeId,
        signature,
        payload,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        signature: string,
        /**
         * The base64 encoded payload that has been encoded as a JSON. e.g how to encode such payload encodeURIComponent
         * `encodeURIComponent(btoa(JSON.stringify({a: 2})))`
         *
         */
        payload?: string,
        approver?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/resume/{id}/{resume_id}/{signature}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
                'signature': signature,
            },
            query: {
                'payload': payload,
                'approver': approver,
            },
        });
    }

    /**
     * resume a job for a suspended flow
     * @returns string job resumed
     * @throws ApiError
     */
    public static resumeSuspendedJobPost({
        workspace,
        id,
        resumeId,
        signature,
        requestBody,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        signature: string,
        requestBody: any,
        approver?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs_u/resume/{id}/{resume_id}/{signature}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
                'signature': signature,
            },
            query: {
                'approver': approver,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * set flow user state at a given key
     * @returns string flow user state updated
     * @throws ApiError
     */
    public static setFlowUserState({
        workspace,
        id,
        key,
        requestBody,
    }: {
        workspace: string,
        id: string,
        key: string,
        /**
         * new value
         */
        requestBody: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/flow/user_states/{id}/{key}',
            path: {
                'workspace': workspace,
                'id': id,
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get flow user state at a given key
     * @returns any flow user state updated
     * @throws ApiError
     */
    public static getFlowUserState({
        workspace,
        id,
        key,
    }: {
        workspace: string,
        id: string,
        key: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/flow/user_states/{id}/{key}',
            path: {
                'workspace': workspace,
                'id': id,
                'key': key,
            },
        });
    }

    /**
     * resume a job for a suspended flow as an owner
     * @returns string job resumed
     * @throws ApiError
     */
    public static resumeSuspendedFlowAsOwner({
        workspace,
        id,
        requestBody,
    }: {
        workspace: string,
        id: string,
        requestBody: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/flow/resume/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * cancel a job for a suspended flow
     * @returns string job canceled
     * @throws ApiError
     */
    public static cancelSuspendedJobGet({
        workspace,
        id,
        resumeId,
        signature,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        signature: string,
        approver?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/cancel/{id}/{resume_id}/{signature}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
                'signature': signature,
            },
            query: {
                'approver': approver,
            },
        });
    }

    /**
     * cancel a job for a suspended flow
     * @returns string job canceled
     * @throws ApiError
     */
    public static cancelSuspendedJobPost({
        workspace,
        id,
        resumeId,
        signature,
        requestBody,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        signature: string,
        requestBody: any,
        approver?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs_u/cancel/{id}/{resume_id}/{signature}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
                'signature': signature,
            },
            query: {
                'approver': approver,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get parent flow job of suspended job
     * @returns any parent flow details
     * @throws ApiError
     */
    public static getSuspendedJobFlow({
        workspace,
        id,
        resumeId,
        signature,
        approver,
    }: {
        workspace: string,
        id: string,
        resumeId: number,
        signature: string,
        approver?: string,
    }): CancelablePromise<{
        job: Job;
        approvers: Array<{
            resume_id: number;
            approver: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get_flow/{id}/{resume_id}/{signature}',
            path: {
                'workspace': workspace,
                'id': id,
                'resume_id': resumeId,
                'signature': signature,
            },
            query: {
                'approver': approver,
            },
        });
    }

    /**
     * Get intervals of job runtime concurrency
     * @returns ExtendedJobs time
     * @throws ApiError
     */
    public static listExtendedJobs({
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
        createdOrStartedAfterCompletedJobs,
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
         * filter on created_at for non non started job and started_at otherwise after (exclusive) timestamp but only for the completed jobs
         */
        createdOrStartedAfterCompletedJobs?: string,
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
    }): CancelablePromise<ExtendedJobs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/concurrency_groups/list_jobs',
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
                'created_or_started_after_completed_jobs': createdOrStartedAfterCompletedJobs,
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
