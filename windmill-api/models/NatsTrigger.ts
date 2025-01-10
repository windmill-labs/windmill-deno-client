/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NatsTrigger = {
    path: string;
    edited_by: string;
    edited_at: string;
    script_path: string;
    nats_resource_path: string;
    use_jetstream: boolean;
    stream_name?: string;
    consumer_name?: string;
    subjects: Array<string>;
    is_flow: boolean;
    extra_perms: Record<string, boolean>;
    email: string;
    workspace_id: string;
    server_id?: string;
    last_server_ping?: string;
    error?: string;
    enabled: boolean;
};

