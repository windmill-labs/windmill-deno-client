/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModuleValue } from './FlowModuleValue.ts';
import type { InputTransform } from './InputTransform.ts';
import type { Retry } from './Retry.ts';

export type FlowModule = {
    id: string;
    value: FlowModuleValue;
    stop_after_if?: {
        skip_if_stopped?: boolean;
        expr: string;
    };
    stop_after_all_iters_if?: {
        skip_if_stopped?: boolean;
        expr: string;
    };
    skip_if?: {
        expr: string;
    };
    sleep?: InputTransform;
    cache_ttl?: number;
    timeout?: number;
    delete_after_use?: boolean;
    summary?: string;
    mock?: {
        enabled?: boolean;
        return_value?: any;
    };
    suspend?: {
        required_events?: number;
        timeout?: number;
        resume_form?: {
            schema?: any;
        };
        user_auth_required?: boolean;
        user_groups_required?: InputTransform;
        self_approval_disabled?: boolean;
        hide_cancel?: boolean;
        continue_on_disapprove_timeout?: boolean;
    };
    priority?: number;
    continue_on_error?: boolean;
    retry?: Retry;
};

