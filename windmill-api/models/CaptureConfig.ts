/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaptureTriggerKind } from './CaptureTriggerKind.ts';

export type CaptureConfig = {
    trigger_config?: any;
    trigger_kind: CaptureTriggerKind;
    error?: string;
    last_server_ping?: string;
};

