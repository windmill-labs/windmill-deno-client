/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModule } from './FlowModule.ts';

export type FlowValue = {
    modules: Array<FlowModule>;
    failure_module?: FlowModule;
    same_worker?: boolean;
    concurrent_limit?: number;
    concurrency_time_window_s?: number;
    skip_expr?: string;
    cache_ttl?: number;
    priority?: number;
    early_return?: string;
};

