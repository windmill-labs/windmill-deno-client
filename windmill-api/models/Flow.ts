/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FlowMetadata } from './FlowMetadata.ts';
import type { OpenFlow } from './OpenFlow.ts';

export type Flow = (OpenFlow & FlowMetadata);

