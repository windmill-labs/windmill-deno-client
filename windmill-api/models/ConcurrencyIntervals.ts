/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConcurrencyIntervals = {
    concurrency_key: string;
    running_jobs: Array<{
        job_id?: string;
        concurrency_key?: string;
        started_at?: string;
    }>;
    completed_jobs: Array<{
        job_id?: string;
        concurrency_key?: string;
        started_at?: string;
        ended_at?: string;
    }>;
};

