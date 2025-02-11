/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowStatus } from './FlowStatus.ts';
import type { FlowValue } from './FlowValue.ts';
import type { ScriptArgs } from './ScriptArgs.ts';
import type { ScriptLang } from './ScriptLang.ts';

export type QueuedJob = {
    workspace_id?: string;
    id: string;
    parent_job?: string;
    created_by?: string;
    created_at?: string;
    started_at?: string;
    scheduled_for?: string;
    running: boolean;
    script_path?: string;
    script_hash?: string;
    args?: ScriptArgs;
    logs?: string;
    raw_code?: string;
    canceled: boolean;
    canceled_by?: string;
    canceled_reason?: string;
    last_ping?: string;
    job_kind: QueuedJob.job_kind;
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
    language?: ScriptLang;
    email: string;
    visible_to_owner: boolean;
    mem_peak?: number;
    tag: string;
    priority?: number;
    self_wait_time_ms?: number;
    aggregate_wait_time_ms?: number;
    suspend?: number;
};

export namespace QueuedJob {

    export enum job_kind {
        SCRIPT = 'script',
        PREVIEW = 'preview',
        DEPENDENCIES = 'dependencies',
        FLOWDEPENDENCIES = 'flowdependencies',
        APPDEPENDENCIES = 'appdependencies',
        FLOW = 'flow',
        FLOWPREVIEW = 'flowpreview',
        SCRIPT_HUB = 'script_hub',
        IDENTITY = 'identity',
        DEPLOYMENTCALLBACK = 'deploymentcallback',
        SINGLESCRIPTFLOW = 'singlescriptflow',
        FLOWSCRIPT = 'flowscript',
        FLOWNODE = 'flownode',
        APPSCRIPT = 'appscript',
    }


}

