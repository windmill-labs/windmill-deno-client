/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Resource = {
    workspace_id?: string;
    path: string;
    description?: string;
    resource_type: string;
    value?: any;
    is_oauth: boolean;
    extra_perms?: Record<string, boolean>;
};

