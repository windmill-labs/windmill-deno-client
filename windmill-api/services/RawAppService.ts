/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListableRawApp } from '../models/ListableRawApp.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class RawAppService {

    /**
     * list all raw apps
     * @returns ListableRawApp All raw apps
     * @throws ApiError
     */
    public static listRawApps({
        workspace,
        page,
        perPage,
        orderDesc,
        createdBy,
        pathStart,
        pathExact,
        starredOnly,
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
         * order by desc order (default true)
         */
        orderDesc?: boolean,
        /**
         * mask to filter exact matching user creator
         */
        createdBy?: string,
        /**
         * mask to filter matching starting path
         */
        pathStart?: string,
        /**
         * mask to filter exact matching path
         */
        pathExact?: string,
        /**
         * (default false)
         * show only the starred items
         *
         */
        starredOnly?: boolean,
    }): CancelablePromise<Array<ListableRawApp>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/raw_apps/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'order_desc': orderDesc,
                'created_by': createdBy,
                'path_start': pathStart,
                'path_exact': pathExact,
                'starred_only': starredOnly,
            },
        });
    }

    /**
     * does an app exisst at path
     * @returns boolean app exists
     * @throws ApiError
     */
    public static existsRawApp({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/raw_apps/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get app by path
     * @returns string app details
     * @throws ApiError
     */
    public static getRawAppData({
        workspace,
        version,
        path,
    }: {
        workspace: string,
        version: number,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/get_data/{version}/{path}',
            path: {
                'workspace': workspace,
                'version': version,
                'path': path,
            },
        });
    }

    /**
     * create raw app
     * @returns string raw app created
     * @throws ApiError
     */
    public static createRawApp({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new raw app
         */
        requestBody: {
            path: string;
            value: string;
            summary: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/raw_apps/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update app
     * @returns string app updated
     * @throws ApiError
     */
    public static updateRawApp({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updateraw  app
         */
        requestBody: {
            path?: string;
            summary?: string;
            value?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/raw_apps/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete raw app
     * @returns string app deleted
     * @throws ApiError
     */
    public static deleteRawApp({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/raw_apps/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

}
