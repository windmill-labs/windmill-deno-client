/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutoscalingEvent = {
    id?: number;
    worker_group?: string;
    event_type?: string;
    desired_workers?: number;
    reason?: string;
    applied_at?: string;
};

