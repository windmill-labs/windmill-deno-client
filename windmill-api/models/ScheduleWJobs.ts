/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Schedule } from './Schedule.ts';

export type ScheduleWJobs = (Schedule & {
    jobs?: Array<{
        id: string;
        success: boolean;
        duration_ms: number;
    }>;
});

