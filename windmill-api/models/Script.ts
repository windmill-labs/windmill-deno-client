/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Script = {
    workspace_id?: string;
    hash: string;
    path: string;
    /**
     * The first element is the direct parent of the script, the second is the parent of the first, etc
     *
     */
    parent_hashes?: Array<string>;
    summary: string;
    description: string;
    content: string;
    created_by: string;
    created_at: string;
    archived: boolean;
    schema?: any;
    deleted: boolean;
    is_template: boolean;
    extra_perms: Record<string, boolean>;
    lock?: string;
    lock_error_logs?: string;
    language: Script.language;
    kind: Script.kind;
    starred: boolean;
    tag?: string;
    has_draft?: boolean;
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
};

export namespace Script {

    export enum language {
        PYTHON3 = 'python3',
        DENO = 'deno',
        GO = 'go',
        BASH = 'bash',
        POWERSHELL = 'powershell',
        POSTGRESQL = 'postgresql',
        MYSQL = 'mysql',
        BIGQUERY = 'bigquery',
        SNOWFLAKE = 'snowflake',
        MSSQL = 'mssql',
        GRAPHQL = 'graphql',
        NATIVETS = 'nativets',
        BUN = 'bun',
    }

    export enum kind {
        SCRIPT = 'script',
        FAILURE = 'failure',
        TRIGGER = 'trigger',
        COMMAND = 'command',
        APPROVAL = 'approval',
    }


}

