/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Policy = {
    triggerables?: Record<string, any>;
    execution_mode?: Policy.execution_mode;
    on_behalf_of?: string;
    on_behalf_of_email?: string;
};

export namespace Policy {

    export enum execution_mode {
        VIEWER = 'viewer',
        PUBLISHER = 'publisher',
        ANONYMOUS = 'anonymous',
    }


}

