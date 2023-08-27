/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModule } from './FlowModule.ts';
import type { InputTransform } from './InputTransform.ts';

export type ForloopFlow = {
    modules: Array<FlowModule>;
    iterator: InputTransform;
    skip_failures: boolean;
    type: 'forloopflow';
    parallel?: boolean;
    parallelism?: number;
};

