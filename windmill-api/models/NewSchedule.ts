/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type NewSchedule = {
    path: string;
    schedule: string;
    timezone: string;
    script_path: string;
    is_flow: boolean;
    args: ScriptArgs;
    enabled?: boolean;
    on_failure?: string;
};

