/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RawScriptForDependencies = {
    content: string;
    path: string;
    language: RawScriptForDependencies.language;
};

export namespace RawScriptForDependencies {

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


}

