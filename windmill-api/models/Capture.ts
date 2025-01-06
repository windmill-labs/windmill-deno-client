/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaptureTriggerKind } from './CaptureTriggerKind.ts';

export type Capture = {
    trigger_kind: CaptureTriggerKind;
    payload: any;
    trigger_extra?: any;
    id: number;
    created_at: string;
};

