/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FlowMetadata = {
    workspace_id?: string;
    path: string;
    edited_by: string;
    edited_at: string;
    archived: boolean;
    extra_perms: any;
    additionalProperties?: boolean;
    starred?: boolean;
    draft_only?: boolean;
    tag?: string;
    ws_error_handler_muted?: boolean;
    priority?: number;
    dedicated_worker?: boolean;
    timeout?: number;
};

