/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModuleValue } from './FlowModuleValue.ts';
import type { InputTransform } from './InputTransform.ts';
import type { Retry } from './Retry.ts';

export type FlowModule = {
    id: string;
    input_transforms?: Record<string, InputTransform>;
    value: FlowModuleValue;
    stop_after_if?: {
        skip_if_stopped?: boolean;
        expr: string;
    };
    sleep?: InputTransform;
    summary?: string;
    suspend?: {
        required_events?: number;
        timeout?: number;
    };
    retry?: Retry;
};

