/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type NewSchedule = {
    path: string;
    schedule: string;
    offset?: number;
    script_path: string;
    is_flow: boolean;
    args: ScriptArgs;
    enabled?: boolean;
};

