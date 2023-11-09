/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditSchedule } from '../models/EditSchedule.ts';
import type { NewSchedule } from '../models/NewSchedule.ts';
import type { Schedule } from '../models/Schedule.ts';
import type { ScheduleWJobs } from '../models/ScheduleWJobs.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ScheduleService {

    /**
     * preview schedule
     * @returns string List of 5 estimated upcoming execution events (in UTC)
     * @throws ApiError
     */
    public static previewSchedule({
        requestBody,
    }: {
        /**
         * schedule
         */
        requestBody: {
            schedule: string;
            timezone: string;
        },
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/schedules/preview',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * create schedule
     * @returns string schedule created
     * @throws ApiError
     */
    public static createSchedule({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new schedule
         */
        requestBody: NewSchedule,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/schedules/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update schedule
     * @returns string schedule updated
     * @throws ApiError
     */
    public static updateSchedule({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated schedule
         */
        requestBody: EditSchedule,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/schedules/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * set enabled schedule
     * @returns string schedule enabled set
     * @throws ApiError
     */
    public static setScheduleEnabled({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated schedule enable
         */
        requestBody: {
            enabled: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/schedules/setenabled/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete schedule
     * @returns string schedule deleted
     * @throws ApiError
     */
    public static deleteSchedule({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/schedules/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get schedule
     * @returns Schedule schedule deleted
     * @throws ApiError
     */
    public static getSchedule({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Schedule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/schedules/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * does schedule exists
     * @returns boolean schedule exists
     * @throws ApiError
     */
    public static existsSchedule({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/schedules/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list schedules
     * @returns Schedule schedule list
     * @throws ApiError
     */
    public static listSchedules({
        workspace,
        page,
        perPage,
        path,
        isFlow,
    }: {
        workspace: string,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        /**
         * filter by path
         */
        path?: string,
        isFlow?: boolean,
    }): CancelablePromise<Array<Schedule>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/schedules/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'path': path,
                'is_flow': isFlow,
            },
        });
    }

    /**
     * list schedules with last 20 jobs
     * @returns ScheduleWJobs schedule list
     * @throws ApiError
     */
    public static listSchedulesWithJobs({
        workspace,
        page,
        perPage,
    }: {
        workspace: string,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<ScheduleWJobs>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/schedules/list_with_jobs',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Set default error or recoevery handler
     * @returns any default error handler set
     * @throws ApiError
     */
    public static setDefaultErrorOrRecoveryHandler({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Handler description
         */
        requestBody: {
            handler_type: 'error' | 'recovery';
            override_existing: boolean;
            path?: string;
            extra_args?: any;
            number_of_occurence?: number;
            number_of_occurence_exact?: boolean;
            workspace_handler_muted?: boolean;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/schedules/setdefaulthandler',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
