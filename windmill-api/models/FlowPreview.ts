/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowValue } from './FlowValue.ts';
import type { ScriptArgs } from './ScriptArgs.ts';

export type FlowPreview = {
    value: FlowValue;
    path?: string;
    args: ScriptArgs;
};

