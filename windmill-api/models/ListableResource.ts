/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListableResource = {
    workspace_id?: string;
    path: string;
    description?: string;
    resource_type: string;
    value?: any;
    is_oauth: boolean;
    extra_perms?: Record<string, boolean>;
    is_expired?: boolean;
    refresh_error?: string;
    is_linked: boolean;
    is_refreshed: boolean;
    account?: number;
};

