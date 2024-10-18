/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebsocketTrigger = {
    path: string;
    edited_by: string;
    edited_at: string;
    script_path: string;
    url: string;
    is_flow: boolean;
    extra_perms: Record<string, boolean>;
    email: string;
    workspace_id: string;
    server_id?: string;
    last_server_ping?: string;
    error?: string;
    enabled: boolean;
    filters: Array<{
        key: string;
        value: any;
    }>;
};

