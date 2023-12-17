/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompletedJob } from '../models/CompletedJob.ts';
import type { FlowPreview } from '../models/FlowPreview.ts';
import type { Job } from '../models/Job.ts';
import type { Preview } from '../models/Preview.ts';
import type { QueuedJob } from '../models/QueuedJob.ts';
import type { ScriptArgs } from '../models/ScriptArgs.ts';

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
        parentJob,
        tag,
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
                'parent_job': parentJob,
                'tag': tag,
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
        parentJob,
        tag,
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
    }: {
        workspace: string,
    }): CancelablePromise<{
        database_length: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/queue/count',
            path: {
                'workspace': workspace,
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
     * cancel all jobs
     * @returns string uuids of canceled jobs
     * @throws ApiError
     */
    public static cancelAll({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/queue/cancel_all',
            path: {
                'workspace': workspace,
            },
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
        isSkipped,
        isFlowStep,
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
         * is the job skipped
         */
        isSkipped?: boolean,
        /**
         * is the job a flow step
         */
        isFlowStep?: boolean,
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
                'is_skipped': isSkipped,
                'is_flow_step': isFlowStep,
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
        isSkipped,
        isFlowStep,
        success,
    }: {
        workspace: string,
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
         * is the job skipped
         */
        isSkipped?: boolean,
        /**
         * is the job a flow step
         */
        isFlowStep?: boolean,
        /**
         * filter on successful jobs
         */
        success?: boolean,
    }): CancelablePromise<Array<Job>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'created_by': createdBy,
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
                'is_skipped': isSkipped,
                'is_flow_step': isFlowStep,
                'success': success,
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
     * get job
     * @returns Job job details
     * @throws ApiError
     */
    public static getJob({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<Job> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/get/{id}',
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
     * get job updates
     * @returns any job details
     * @throws ApiError
     */
    public static getJobUpdates({
        workspace,
        id,
        running,
        logOffset,
    }: {
        workspace: string,
        id: string,
        running?: boolean,
        logOffset?: number,
    }): CancelablePromise<{
        running?: boolean;
        completed?: boolean;
        new_logs?: string;
        mem_peak?: number;
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
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs_u/completed/get_result/{id}',
            path: {
                'workspace': workspace,
                'id': id,
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
     * cancel queued job
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

}
