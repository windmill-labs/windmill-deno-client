/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowModule } from './FlowModule.ts';

export type FlowValue = {
    modules: Array<FlowModule>;
    failure_module?: FlowModule;
    same_worker?: boolean;
};

