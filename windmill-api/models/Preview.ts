/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';

export type Preview = {
    content: string;
    path?: string;
    args: ScriptArgs;
    language: Preview.language;
};

export namespace Preview {

    export enum language {
        PYTHON3 = 'python3',
        DENO = 'deno',
        GO = 'go',
    }


}

