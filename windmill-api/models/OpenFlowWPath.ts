/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OpenFlow } from './OpenFlow.ts';

export type OpenFlowWPath = (OpenFlow & {
    path: string;
    tag?: string;
    ws_error_handler_muted?: boolean;
    priority?: number;
    dedicated_worker?: boolean;
    timeout?: number;
});

