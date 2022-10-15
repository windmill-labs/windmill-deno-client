/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type Schedule = {
    path: string;
    edited_by: string;
    edited_at: string;
    schedule: string;
    offset_: number;
    enabled: boolean;
    script_path: string;
    is_flow: boolean;
    args?: ScriptArgs;
    extra_perms: Record<string, boolean>;
};

