/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricDataPoint } from './MetricDataPoint.ts';

export type TimeseriesMetric = {
    metric_id?: string;
    values: Array<MetricDataPoint>;
};

