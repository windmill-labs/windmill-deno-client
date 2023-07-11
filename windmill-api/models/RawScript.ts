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
};

export namespace RawScript {

    export enum language {
        DENO = 'deno',
        PYTHON3 = 'python3',
        GO = 'go',
        BASH = 'bash',
        POSTGRESQL = 'postgresql',
        MYSQL = 'mysql',
        GRAPHQL = 'graphql',
        NATIVETS = 'nativets',
    }


}

