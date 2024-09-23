/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditHttpTrigger } from '../models/EditHttpTrigger.ts';
import type { HttpTrigger } from '../models/HttpTrigger.ts';
import type { NewHttpTrigger } from '../models/NewHttpTrigger.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class HttpTriggerService {

    /**
     * create http trigger
     * @returns string http trigger created
     * @throws ApiError
     */
    public static createHttpTrigger({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new http trigger
         */
        requestBody: NewHttpTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/http_triggers/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update http trigger
     * @returns string http trigger updated
     * @throws ApiError
     */
    public static updateHttpTrigger({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated trigger
         */
        requestBody: EditHttpTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/http_triggers/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete http trigger
     * @returns string http trigger deleted
     * @throws ApiError
     */
    public static deleteHttpTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/http_triggers/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get http trigger
     * @returns HttpTrigger http trigger deleted
     * @throws ApiError
     */
    public static getHttpTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<HttpTrigger> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/http_triggers/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list http triggers
     * @returns HttpTrigger http trigger list
     * @throws ApiError
     */
    public static listHttpTriggers({
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
    }): CancelablePromise<Array<HttpTrigger>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/http_triggers/list',
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
     * does http trigger exists
     * @returns boolean http trigger exists
     * @throws ApiError
     */
    public static existsHttpTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/http_triggers/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * does route exists
     * @returns boolean route exists
     * @throws ApiError
     */
    public static existsRoute({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * route exists request
         */
        requestBody: {
            route_path: string;
            http_method: 'get' | 'post' | 'put' | 'delete' | 'patch';
        },
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/http_triggers/route_exists',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * whether http triggers are used
     * @returns boolean whether http triggers are used
     * @throws ApiError
     */
    public static used({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/http_triggers/used',
            path: {
                'workspace': workspace,
            },
        });
    }

}
