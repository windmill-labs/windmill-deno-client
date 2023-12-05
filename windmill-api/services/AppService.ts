/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppHistory } from '../models/AppHistory.ts';
import type { AppWithLastVersion } from '../models/AppWithLastVersion.ts';
import type { AppWithLastVersionWDraft } from '../models/AppWithLastVersionWDraft.ts';
import type { ListableApp } from '../models/ListableApp.ts';
import type { Policy } from '../models/Policy.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AppService {

    /**
     * list all hub apps
     * @returns any hub apps list
     * @throws ApiError
     */
    public static listHubApps(): CancelablePromise<{
        apps?: Array<{
            id: number;
            app_id: number;
            summary: string;
            apps: Array<string>;
            approved: boolean;
            votes: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/apps/hub/list',
        });
    }

    /**
     * get hub app by id
     * @returns any app
     * @throws ApiError
     */
    public static getHubAppById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        app: {
            summary: string;
            value: any;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/apps/hub/get/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * list apps for search
     * @returns any app list
     * @throws ApiError
     */
    public static listSearchApp({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<{
        path: string;
        value: any;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/list_search',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list all apps
     * @returns ListableApp All apps
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
                'starred_only': starredOnly,
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
            draft_only?: boolean;
            deployment_message?: string;
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
     * does an app exisst at path
     * @returns boolean app exists
     * @throws ApiError
     */
    public static existsApp({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
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
     * get app by path with draft
     * @returns AppWithLastVersionWDraft app details with draft
     * @throws ApiError
     */
    public static getAppByPathWithDraft({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<AppWithLastVersionWDraft> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/get/draft/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get app history by path
     * @returns AppHistory app history
     * @throws ApiError
     */
    public static getAppHistoryByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Array<AppHistory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/history/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * update app history
     * @returns string success
     * @throws ApiError
     */
    public static updateAppHistory({
        workspace,
        id,
        version,
        requestBody,
    }: {
        workspace: string,
        id: number,
        version: number,
        /**
         * App deployment message
         */
        requestBody: {
            deployment_msg?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/apps/history_update/a/{id}/v/{version}',
            path: {
                'workspace': workspace,
                'id': id,
                'version': version,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get public app by secret
     * @returns AppWithLastVersion app details
     * @throws ApiError
     */
    public static getPublicAppBySecret({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<AppWithLastVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps_u/public_app/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get public resource
     * @returns any resource value
     * @throws ApiError
     */
    public static getPublicResource({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps_u/public_resource/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get public secret of app
     * @returns string app secret
     * @throws ApiError
     */
    public static getPublicSecretOfApp({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/apps/secret_of/{path}',
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
            deployment_message?: string;
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
            component: string;
            path?: string;
            args: any;
            raw_code?: {
                content: string;
                language: string;
                path?: string;
                cache_ttl?: number;
            };
            force_viewer_static_fields?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/apps_u/execute_component/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
