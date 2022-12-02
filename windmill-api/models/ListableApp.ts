/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListableApp = {
    id: number;
    workspace_id: string;
    path: string;
    summary: string;
    version: number;
    extra_perms: Record<string, boolean>;
    starred?: boolean;
    edited_at: string;
    execution_mode: ListableApp.execution_mode;
};

export namespace ListableApp {

    export enum execution_mode {
        VIEWER = 'viewer',
        PUBLISHER = 'publisher',
        ANONYMOUS = 'anonymous',
    }


}

