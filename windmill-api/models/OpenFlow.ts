/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowValue } from './FlowValue.ts';

export type OpenFlow = {
    summary: string;
    description?: string;
    value: FlowValue;
    schema?: any;
};

