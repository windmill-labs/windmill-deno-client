/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type KafkaTrigger = {
    path: string;
    edited_by: string;
    edited_at: string;
    script_path: string;
    kafka_resource_path: string;
    group_id: string;
    topics: Array<string>;
    is_flow: boolean;
    extra_perms: Record<string, boolean>;
    email: string;
    workspace_id: string;
    server_id?: string;
    last_server_ping?: string;
    error?: string;
    enabled: boolean;
};

