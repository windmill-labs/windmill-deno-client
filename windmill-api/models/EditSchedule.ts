/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type EditSchedule = {
    schedule: string;
    timezone: string;
    args: ScriptArgs;
    on_failure?: string;
    on_failure_times?: number;
    on_failure_exact?: boolean;
    on_failure_extra_args?: ScriptArgs;
    on_recovery?: string;
    on_recovery_times?: number;
    on_recovery_extra_args?: ScriptArgs;
    ws_error_handler_muted?: boolean;
};

