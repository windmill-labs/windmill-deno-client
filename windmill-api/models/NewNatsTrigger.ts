/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewNatsTrigger = {
    path: string;
    script_path: string;
    is_flow: boolean;
    nats_resource_path: string;
    use_jetstream: boolean;
    stream_name?: string;
    consumer_name?: string;
    subjects: Array<string>;
    enabled?: boolean;
};
