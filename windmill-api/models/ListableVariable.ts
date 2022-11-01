/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListableVariable = {
    workspace_id: string;
    path: string;
    value?: string;
    is_secret: boolean;
    description?: string;
    account?: number;
    is_oauth?: boolean;
    extra_perms: Record<string, boolean>;
};

