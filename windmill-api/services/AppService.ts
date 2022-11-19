/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppWithLastVersion } from '../models/AppWithLastVersion.ts';
import type { ListableApp } from '../models/ListableApp.ts';
import type { Policy } from '../models/Policy.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AppService {

    /**
     * list all available apps
     * @returns ListableApp All available apps
     * @throws ApiError
     */
    public static listApps({
        workspace,
        page,
        perPage,
        orderDesc,
        createdBy,
        pathStart,
        pathExact,
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
    }): CancelablePromise<Array<ListableApp>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/list',
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
            },
        });
    }

    /**
     * get app by path
     * @returns AppWithLastVersion app details
     * @throws ApiError
     */
    public static getAppByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<AppWithLastVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/get/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get app by version
     * @returns AppWithLastVersion app details
     * @throws ApiError
     */
    public static getAppByVersion({
        workspace,
        id,
    }: {
        workspace: string,
        id: number,
    }): CancelablePromise<AppWithLastVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/get/v/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * create app
     * @returns string app created
     * @throws ApiError
     */
    public static createApp({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new app
         */
        requestBody: {
            path: string;
            value: any;
            summary: string;
            policy: Policy;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/apps/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete app
     * @returns string app deleted
     * @throws ApiError
     */
    public static deleteApp({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/apps/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * update app
     * @returns string app updated
     * @throws ApiError
     */
    public static updateApp({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * update app
         */
        requestBody: {
            path?: string;
            summary?: string;
            value?: any;
            policy?: Policy;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/apps/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * executeComponent
     * @returns string job uuid
     * @throws ApiError
     */
    public static executeComponent({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * update app
         */
        requestBody: {
            path?: string;
            args: any;
            raw_code?: {
                content: string;
                language: string;
                path?: string;
            };
            force_viewer_static_fields?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/apps/execute_component/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}