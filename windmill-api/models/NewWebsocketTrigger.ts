/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';
import type { WebsocketTriggerInitialMessage } from './WebsocketTriggerInitialMessage.ts';

export type NewWebsocketTrigger = {
    path: string;
    script_path: string;
    is_flow: boolean;
    url: string;
    enabled?: boolean;
    filters: Array<{
        key: string;
        value: any;
    }>;
    initial_messages: Array<WebsocketTriggerInitialMessage>;
    url_runnable_args: ScriptArgs;
};

