/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EditNatsTrigger = {
    nats_resource_path: string;
    use_jetstream: boolean;
    stream_name?: string;
    consumer_name?: string;
    subjects: Array<string>;
    path: string;
    script_path: string;
    is_flow: boolean;
};

