/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job.ts';
import type { ObscuredJob } from './ObscuredJob.ts';

export type ExtendedJobs = {
    jobs: Array<Job>;
    obscured_jobs: Array<ObscuredJob>;
    /**
     * Obscured jobs omitted for security because of too specific filtering
     */
    omitted_obscured_jobs?: boolean;
};

