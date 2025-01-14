/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RawScriptForDependencies = {
    raw_code: string;
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
        ORACLEDB = 'oracledb',
        GRAPHQL = 'graphql',
        NATIVETS = 'nativets',
        BUN = 'bun',
        PHP = 'php',
        RUST = 'rust',
        ANSIBLE = 'ansible',
        CSHARP = 'csharp',
    }


}

