/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputTransform } from './InputTransform.ts';

export type RawScript = {
    input_transforms: Record<string, InputTransform>;
    content: string;
    language: RawScript.language;
    path?: string;
    type: 'rawscript';
};

export namespace RawScript {

    export enum language {
        DENO = 'deno',
        PYTHON3 = 'python3',
        GO = 'go',
        BASH = 'bash',
    }


}

