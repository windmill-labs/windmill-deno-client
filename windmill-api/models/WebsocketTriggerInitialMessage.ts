/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type WebsocketTriggerInitialMessage = ({
    raw_message: string;
} | {
    runnable_result: {
        path: string;
        args: ScriptArgs;
        is_flow: boolean;
    };
});

