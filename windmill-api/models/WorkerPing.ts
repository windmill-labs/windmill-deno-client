/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkerPing = {
    worker: string;
    worker_instance: string;
    last_ping?: number;
    started_at: string;
    ip: string;
    jobs_executed: number;
};

