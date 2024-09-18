/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricMetadata } from '../models/MetricMetadata.ts';
import type { ScalarMetric } from '../models/ScalarMetric.ts';
import type { TimeseriesMetric } from '../models/TimeseriesMetric.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class MetricsService {

    /**
     * get job metrics
     * @returns any job details
     * @throws ApiError
     */
    public static getJobMetrics({
        workspace,
        id,
        requestBody,
    }: {
        workspace: string,
        id: string,
        /**
         * parameters for statistics retrieval
         */
        requestBody: {
            timeseries_max_datapoints?: number;
            from_timestamp?: string;
            to_timestamp?: string;
        },
    }): CancelablePromise<{
        metrics_metadata?: Array<MetricMetadata>;
        scalar_metrics?: Array<ScalarMetric>;
        timeseries_metrics?: Array<TimeseriesMetric>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_metrics/get/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * set job metrics
     * @returns any Job progress updated
     * @throws ApiError
     */
    public static setJobProgress({
        workspace,
        id,
        requestBody,
    }: {
        workspace: string,
        id: string,
        /**
         * parameters for statistics retrieval
         */
        requestBody: {
            percent?: number;
            flow_job_id?: string;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/job_metrics/set_progress/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get job progress
     * @returns number job progress between 0 and 99
     * @throws ApiError
     */
    public static getJobProgress({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/job_metrics/get_progress/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

}
