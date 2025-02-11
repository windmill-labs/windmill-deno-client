/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptLang } from './ScriptLang.ts';

export type NewScript = {
    path: string;
    parent_hash?: string;
    summary: string;
    description: string;
    content: string;
    schema?: any;
    is_template?: boolean;
    lock?: string;
    language: ScriptLang;
    kind?: NewScript.kind;
    tag?: string;
    draft_only?: boolean;
    envs?: Array<string>;
    concurrent_limit?: number;
    concurrency_time_window_s?: number;
    cache_ttl?: number;
    dedicated_worker?: boolean;
    ws_error_handler_muted?: boolean;
    priority?: number;
    restart_unless_cancelled?: boolean;
    timeout?: number;
    delete_after_use?: boolean;
    deployment_message?: string;
    concurrency_key?: string;
    visible_to_runner_only?: boolean;
    no_main_func?: boolean;
    codebase?: string;
    has_preprocessor?: boolean;
    on_behalf_of_email?: string;
};

export namespace NewScript {

    export enum kind {
        SCRIPT = 'script',
        FAILURE = 'failure',
        TRIGGER = 'trigger',
        COMMAND = 'command',
        APPROVAL = 'approval',
        PREPROCESSOR = 'preprocessor',
    }


}

