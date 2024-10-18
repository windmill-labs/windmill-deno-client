/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditWebsocketTrigger } from '../models/EditWebsocketTrigger.ts';
import type { NewWebsocketTrigger } from '../models/NewWebsocketTrigger.ts';
import type { WebsocketTrigger } from '../models/WebsocketTrigger.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class WebsocketTriggerService {

    /**
     * create websocket trigger
     * @returns string websocket trigger created
     * @throws ApiError
     */
    public static createWebsocketTrigger({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new websocket trigger
         */
        requestBody: NewWebsocketTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/websocket_triggers/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update websocket trigger
     * @returns string websocket trigger updated
     * @throws ApiError
     */
    public static updateWebsocketTrigger({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated trigger
         */
        requestBody: EditWebsocketTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/websocket_triggers/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete websocket trigger
     * @returns string websocket trigger deleted
     * @throws ApiError
     */
    public static deleteWebsocketTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/websocket_triggers/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get websocket trigger
     * @returns WebsocketTrigger websocket trigger deleted
     * @throws ApiError
     */
    public static getWebsocketTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<WebsocketTrigger> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/websocket_triggers/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list websocket triggers
     * @returns WebsocketTrigger websocket trigger list
     * @throws ApiError
     */
    public static listWebsocketTriggers({
        workspace,
        page,
        perPage,
        path,
        isFlow,
        pathStart,
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
        pathStart?: string,
    }): CancelablePromise<Array<WebsocketTrigger>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/websocket_triggers/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'path': path,
                'is_flow': isFlow,
                'path_start': pathStart,
            },
        });
    }

    /**
     * does websocket trigger exists
     * @returns boolean websocket trigger exists
     * @throws ApiError
     */
    public static existsWebsocketTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/websocket_triggers/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * set enabled websocket trigger
     * @returns string websocket trigger enabled set
     * @throws ApiError
     */
    public static setWebsocketTriggerEnabled({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated websocket trigger enable
         */
        requestBody: {
            enabled: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/websocket_triggers/setenabled/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
