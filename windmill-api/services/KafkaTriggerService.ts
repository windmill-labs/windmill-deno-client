/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditKafkaTrigger } from '../models/EditKafkaTrigger.ts';
import type { KafkaTrigger } from '../models/KafkaTrigger.ts';
import type { NewKafkaTrigger } from '../models/NewKafkaTrigger.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class KafkaTriggerService {

    /**
     * create kafka trigger
     * @returns string kafka trigger created
     * @throws ApiError
     */
    public static createKafkaTrigger({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new kafka trigger
         */
        requestBody: NewKafkaTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/kafka_triggers/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update kafka trigger
     * @returns string kafka trigger updated
     * @throws ApiError
     */
    public static updateKafkaTrigger({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated trigger
         */
        requestBody: EditKafkaTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/kafka_triggers/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete kafka trigger
     * @returns string kafka trigger deleted
     * @throws ApiError
     */
    public static deleteKafkaTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/kafka_triggers/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get kafka trigger
     * @returns KafkaTrigger kafka trigger deleted
     * @throws ApiError
     */
    public static getKafkaTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<KafkaTrigger> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/kafka_triggers/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list kafka triggers
     * @returns KafkaTrigger kafka trigger list
     * @throws ApiError
     */
    public static listKafkaTriggers({
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
    }): CancelablePromise<Array<KafkaTrigger>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/kafka_triggers/list',
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
     * does kafka trigger exists
     * @returns boolean kafka trigger exists
     * @throws ApiError
     */
    public static existsKafkaTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/kafka_triggers/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * set enabled kafka trigger
     * @returns string kafka trigger enabled set
     * @throws ApiError
     */
    public static setKafkaTriggerEnabled({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated kafka trigger enable
         */
        requestBody: {
            enabled: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/kafka_triggers/setenabled/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
