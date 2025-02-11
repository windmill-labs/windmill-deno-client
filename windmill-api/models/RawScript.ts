/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputTransform } from './InputTransform.ts';

export type RawScript = {
    input_transforms: Record<string, InputTransform>;
    content: string;
    language: RawScript.language;
    path?: string;
    lock?: string;
    type: 'rawscript';
    tag?: string;
    concurrent_limit?: number;
    concurrency_time_window_s?: number;
    custom_concurrency_key?: string;
    is_trigger?: boolean;
};

export namespace RawScript {

    export enum language {
        DENO = 'deno',
        BUN = 'bun',
        PYTHON3 = 'python3',
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
        PHP = 'php',
    }


}

