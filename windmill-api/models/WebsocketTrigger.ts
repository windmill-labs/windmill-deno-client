/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';
import type { TriggerExtraProperty } from './TriggerExtraProperty.ts';
import type { WebsocketTriggerInitialMessage } from './WebsocketTriggerInitialMessage.ts';

export type WebsocketTrigger = (TriggerExtraProperty & {
    path: string;
    script_path: string;
    url: string;
    is_flow: boolean;
    server_id?: string;
    last_server_ping?: string;
    error?: string;
    enabled: boolean;
    filters: Array<{
        key: string;
        value: any;
    }>;
    initial_messages?: Array<WebsocketTriggerInitialMessage>;
    url_runnable_args?: ScriptArgs;
});

