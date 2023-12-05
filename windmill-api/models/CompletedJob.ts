/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowStatus } from './FlowStatus.ts';
import type { FlowValue } from './FlowValue.ts';
import type { ScriptArgs } from './ScriptArgs.ts';

export type CompletedJob = {
    workspace_id?: string;
    id: string;
    parent_job?: string;
    created_by: string;
    created_at: string;
    started_at: string;
    duration_ms: number;
    success: boolean;
    script_path?: string;
    script_hash?: string;
    args?: ScriptArgs;
    result?: any;
    logs?: string;
    deleted?: boolean;
    raw_code?: string;
    canceled: boolean;
    canceled_by?: string;
    canceled_reason?: string;
    job_kind: CompletedJob.job_kind;
    schedule_path?: string;
    /**
     * The user (u/userfoo) or group (g/groupfoo) whom
     * the execution of this script will be permissioned_as and by extension its DT_TOKEN.
     *
     */
    permissioned_as: string;
    flow_status?: FlowStatus;
    raw_flow?: FlowValue;
    is_flow_step: boolean;
    language?: CompletedJob.language;
    is_skipped: boolean;
    email: string;
    visible_to_owner: boolean;
    mem_peak?: number;
    tag: string;
    priority?: number;
};

export namespace CompletedJob {

    export enum job_kind {
        SCRIPT = 'script',
        PREVIEW = 'preview',
        DEPENDENCIES = 'dependencies',
        FLOW = 'flow',
        FLOWDEPENDENCIES = 'flowdependencies',
        APPDEPENDENCIES = 'appdependencies',
        FLOWPREVIEW = 'flowpreview',
        SCRIPT_HUB = 'script_hub',
        IDENTITY = 'identity',
        DEPLOYMENTCALLBACK = 'deploymentcallback',
    }

    export enum language {
        PYTHON3 = 'python3',
        DENO = 'deno',
        GO = 'go',
        BASH = 'bash',
        POWERSHELL = 'powershell',
        POSTGRESQL = 'postgresql',
        MYSQL = 'mysql',
        BIGQUERY = 'bigquery',
        SNOWFLAKE = 'snowflake',
        MSSQL = 'mssql',
        GRAPHQL = 'graphql',
        NATIVETS = 'nativets',
        BUN = 'bun',
    }


}

