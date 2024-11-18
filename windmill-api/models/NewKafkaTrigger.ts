/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewKafkaTrigger = {
    path: string;
    script_path: string;
    is_flow: boolean;
    kafka_resource_path: string;
    group_id: string;
    topics: Array<string>;
    enabled?: boolean;
};

