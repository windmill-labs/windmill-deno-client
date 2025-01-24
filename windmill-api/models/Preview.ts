/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArgs } from './ScriptArgs.ts';
import type { ScriptLang } from './ScriptLang.ts';

export type Preview = {
    content?: string;
    path?: string;
    args: ScriptArgs;
    language?: ScriptLang;
    tag?: string;
    kind?: Preview.kind;
    dedicated_worker?: boolean;
    lock?: string;
};

export namespace Preview {

    export enum kind {
        CODE = 'code',
        IDENTITY = 'identity',
        HTTP = 'http',
    }


}

