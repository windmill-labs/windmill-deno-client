/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModule } from './FlowModule.ts';

export type WhileloopFlow = {
    modules: Array<FlowModule>;
    skip_failures: boolean;
    type: 'whileloopflow';
    parallel?: boolean;
    parallelism?: number;
};

