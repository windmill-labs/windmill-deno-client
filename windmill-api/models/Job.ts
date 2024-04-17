/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompletedJob } from './CompletedJob.ts';
import type { QueuedJob } from './QueuedJob.ts';

export type Job = ((CompletedJob & {
    type?: Job.type;
}) | (QueuedJob & {
    type?: Job.type;
}));

export namespace Job {

    export enum type {
        COMPLETED_JOB = 'CompletedJob',
    }


}

