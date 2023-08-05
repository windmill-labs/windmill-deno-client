/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type Preview = {
    content?: string;
    path?: string;
    args: ScriptArgs;
    language?: Preview.language;
    tag?: string;
    kind?: Preview.kind;
};

export namespace Preview {

    export enum language {
        PYTHON3 = 'python3',
        DENO = 'deno',
        GO = 'go',
        BASH = 'bash',
        POSTGRESQL = 'postgresql',
        MYSQL = 'mysql',
        BIGQUERY = 'bigquery',
        SNOWFLAKE = 'snowflake',
        GRAPHQL = 'graphql',
        NATIVETS = 'nativets',
        BUN = 'bun',
    }

    export enum kind {
        CODE = 'code',
        IDENTITY = 'identity',
        HTTP = 'http',
    }


}

