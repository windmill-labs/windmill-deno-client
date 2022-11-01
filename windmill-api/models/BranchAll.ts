/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModule } from './FlowModule.ts';

export type BranchAll = {
    branches: Array<{
        summary?: string;
        skip_failure?: boolean;
        modules: Array<FlowModule>;
    }>;
    type: 'branchall';
    parallel?: boolean;
};

