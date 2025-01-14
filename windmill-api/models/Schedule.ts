/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Retry } from './Retry.ts';
import type { ScriptArgs } from './ScriptArgs.ts';

export type Schedule = {
    path: string;
    edited_by: string;
    edited_at: string;
    schedule: string;
    timezone: string;
    enabled: boolean;
    script_path: string;
    is_flow: boolean;
    args?: ScriptArgs;
    extra_perms: Record<string, boolean>;
    email: string;
    error?: string;
    on_failure?: string;
    on_failure_times?: number;
    on_failure_exact?: boolean;
    on_failure_extra_args?: ScriptArgs;
    on_recovery?: string;
    on_recovery_times?: number;
    on_recovery_extra_args?: ScriptArgs;
    on_success?: string;
    on_success_extra_args?: ScriptArgs;
    ws_error_handler_muted?: boolean;
    retry?: Retry;
    summary?: string;
    no_flow_overlap?: boolean;
    tag?: string;
    paused_until?: string;
    cron_version?: string;
};

