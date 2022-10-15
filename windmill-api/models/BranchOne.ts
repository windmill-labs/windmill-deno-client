/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModule } from './FlowModule.ts';

export type BranchOne = {
    branches: Array<{
        summary?: string;
        expr: string;
        modules: Array<FlowModule>;
    }>;
    default: Array<FlowModule>;
    type: 'branchone';
};

