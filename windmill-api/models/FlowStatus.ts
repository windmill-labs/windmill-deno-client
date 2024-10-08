/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowStatusModule } from './FlowStatusModule.ts';

export type FlowStatus = {
    step: number;
    modules: Array<FlowStatusModule>;
    user_states?: any;
    preprocessor_module?: FlowStatusModule;
    failure_module: (FlowStatusModule & {
        parent_module?: string;
    });
    retry?: {
        fail_count?: number;
        failed_jobs?: Array<string>;
    };
};

