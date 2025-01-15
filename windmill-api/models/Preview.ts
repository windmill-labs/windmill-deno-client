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
    dedicated_worker?: boolean;
    lock?: string;
};

export namespace Preview {

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
        ORACLEDB = 'oracledb',
        GRAPHQL = 'graphql',
        NATIVETS = 'nativets',
        BUN = 'bun',
        PHP = 'php',
        RUST = 'rust',
        ANSIBLE = 'ansible',
        CSHARP = 'csharp',
    }

    export enum kind {
        CODE = 'code',
        IDENTITY = 'identity',
        HTTP = 'http',
    }


}

