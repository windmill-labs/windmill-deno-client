/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListableRawApp = {
    workspace_id: string;
    path: string;
    summary: string;
    extra_perms: Record<string, boolean>;
    starred?: boolean;
    version: number;
    edited_at: string;
};

