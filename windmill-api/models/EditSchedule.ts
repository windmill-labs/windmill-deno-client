/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type EditSchedule = {
    schedule: string;
    script_path: string;
    is_flow: boolean;
    args: ScriptArgs;
};

