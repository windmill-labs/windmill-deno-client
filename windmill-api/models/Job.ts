/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompletedJob } from './CompletedJob.ts';
import type { QueuedJob } from './QueuedJob.ts';

export type Job = ((CompletedJob | QueuedJob) & {
    type?: Job.type;
});

export namespace Job {

    export enum type {
        COMPLETED_JOB = 'CompletedJob',
        QUEUED_JOB = 'QueuedJob',
    }


}

