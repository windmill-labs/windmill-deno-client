/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RawScript = {
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
    }


}

