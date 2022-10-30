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
        scheduledFor,
        scheduledInSecs,
        parentJob,
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
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run_wait_result/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'scheduled_for': scheduledFor,
                'scheduled_in_secs': scheduledInSecs,
                'parent_job': parentJob,
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
        skipDirect,
    }: {
        workspace: string,
        flowJobId: string,
        nodeId: string,
        /**
         * Skip checking that the node is part of the given flow.
         */
        skipDirect?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/result_by_id/{flow_job_id}/{node_id}',
            path: {
                'workspace': workspace,
                'flow_job_id': flowJobId,
                'node_id': nodeId,
            },
            query: {
                'skip_direct': skipDirect,
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
    }: {
        workspace: string,
        /**
         * preview
         */
        requestBody: Preview,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/preview',
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
    }: {
        workspace: string,
        /**
         * preview
         */
        requestBody: FlowPreview,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/jobs/run/preview_flow',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list all available queued jobs
     * @returns QueuedJob All available queued jobs
     * @throws ApiError
     */
    public static listQueue({
        workspace,
        orderDesc,
        createdBy,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        scriptHash,
        createdBefore,
        createdAfter,
        success,
        jobKinds,
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
         * mask to filter exact matching path
         */
        scriptHash?: string,
        /**
         * filter on created before (inclusive) timestamp
         */
        createdBefore?: string,
        /**
         * filter on created after (exclusive) timestamp
         */
        createdAfter?: string,
        /**
         * filter on successful jobs
         */
        success?: boolean,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
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
                'script_hash': scriptHash,
                'created_before': createdBefore,
                'created_after': createdAfter,
                'success': success,
                'job_kinds': jobKinds,
            },
        });
    }

    /**
     * list all available completed jobs
     * @returns CompletedJob All available completed jobs
     * @throws ApiError
     */
    public static listCompletedJobs({
        workspace,
        orderDesc,
        createdBy,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        scriptHash,
        createdBefore,
        createdAfter,
        success,
        jobKinds,
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
         * mask to filter exact matching path
         */
        scriptHash?: string,
        /**
         * filter on created before (inclusive) timestamp
         */
        createdBefore?: string,
        /**
         * filter on created after (exclusive) timestamp
         */
        createdAfter?: string,
        /**
         * filter on successful jobs
         */
        success?: boolean,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
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
                'script_hash': scriptHash,
                'created_before': createdBefore,
                'created_after': createdAfter,
                'success': success,
                'job_kinds': jobKinds,
                'is_skipped': isSkipped,
                'is_flow_step': isFlowStep,
            },
        });
    }

    /**
     * list all available jobs
     * @returns Job All jobs
     * @throws ApiError
     */
    public static listJobs({
        workspace,
        createdBy,
        parentJob,
        scriptPathExact,
        scriptPathStart,
        scriptHash,
        createdBefore,
        createdAfter,
        jobKinds,
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
         * mask to filter exact matching path
         */
        scriptHash?: string,
        /**
         * filter on created before (inclusive) timestamp
         */
        createdBefore?: string,
        /**
         * filter on created after (exclusive) timestamp
         */
        createdAfter?: string,
        /**
         * filter on job kind (values 'preview', 'script', 'dependencies', 'flow') separated by,
         */
        jobKinds?: string,
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
                'script_hash': scriptHash,
                'created_before': createdBefore,
                'created_after': createdAfter,
                'job_kinds': jobKinds,
                'is_skipped': isSkipped,
                'is_flow_step': isFlowStep,
                'success': success,
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
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<Job> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/get/{id}',
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/jobs/getupdate/{id}',
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
            url: '/w/{workspace}/jobs/completed/get/{id}',
            path: {
                'workspace': workspace,
                'id': id,
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
            url: '/w/{workspace}/jobs/queue/cancel/{id}',
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
     * resume a job for a suspended flow
     * @returns string job resumed
     * @throws ApiError
     */
    public static resumeSuspendedJobGet({
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
            url: '/w/{workspace}/jobs/resume/{id}/{resume_id}/{signature}',
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
            url: '/w/{workspace}/jobs/resume/{id}/{resume_id}/{signature}',
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
     * cancel a job for a suspended flow
     * @returns string job resumed
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
            url: '/w/{workspace}/jobs/cancel/{id}/{resume_id}/{signature}',
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
     * @returns string job resumed
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
            url: '/w/{workspace}/jobs/cancel/{id}/{resume_id}/{signature}',
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
            url: '/w/{workspace}/jobs/get_flow/{id}/{resume_id}/{signature}',
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
