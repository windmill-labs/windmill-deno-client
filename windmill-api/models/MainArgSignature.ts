/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MainArgSignature = {
    type: MainArgSignature.type;
    error: string;
    star_args: boolean;
    star_kwargs?: boolean;
    args: Array<{
        name: string;
        typ: ('float' | 'int' | 'bool' | 'email' | 'unknown' | 'bytes' | 'dict' | 'datetime' | 'sql' | {
            resource: string | null;
        } | {
            str: Array<string> | null;
        } | {
            object: Array<{
                key: string;
                typ: ('float' | 'int' | 'bool' | 'email' | 'unknown' | 'bytes' | 'dict' | 'datetime' | 'sql' | {
                    str: any;
                });
            }>;
        } | {
            list: ('float' | 'int' | 'bool' | 'email' | 'unknown' | 'bytes' | 'dict' | 'datetime' | 'sql' | {
                str: any;
            }) | null;
        });
        has_default?: boolean;
        default?: any;
    }>;
};

export namespace MainArgSignature {

    export enum type {
        VALID = 'Valid',
        INVALID = 'Invalid',
    }


}

