/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewScript = {
    path: string;
    parent_hash?: string;
    summary: string;
    description: string;
    content: string;
    schema?: any;
    is_template?: boolean;
    lock?: Array<string>;
    language: NewScript.language;
    kind?: NewScript.kind;
    tag?: string;
    draft_only?: boolean;
    envs?: Array<string>;
};

export namespace NewScript {

    export enum language {
        PYTHON3 = 'python3',
        DENO = 'deno',
        GO = 'go',
        BASH = 'bash',
        POSTGRESQL = 'postgresql',
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

