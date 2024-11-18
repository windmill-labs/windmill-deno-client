/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EditKafkaTrigger = {
    kafka_resource_path: string;
    group_id: string;
    topics: Array<string>;
    path: string;
    script_path: string;
    is_flow: boolean;
};

