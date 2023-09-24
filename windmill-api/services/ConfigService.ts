/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ConfigService {

    /**
     * list worker groups
     * @returns any a list of worker group configs
     * @throws ApiError
     */
    public static listWorkerGroups(): CancelablePromise<Array<{
        name: string;
        config: any;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/configs/list_worker_groups',
        });
    }

    /**
     * get config
     * @returns any a config
     * @throws ApiError
     */
    public static getConfig({
        name,
    }: {
        name: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/configs/get/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * Update config
     * @returns string Update a worker group
     * @throws ApiError
     */
    public static updateConfig({
        name,
        requestBody,
    }: {
        name: string,
        /**
         * worker group
         */
        requestBody: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/configs/update/{name}',
            path: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Config
     * @returns string Delete config
     * @throws ApiError
     */
    public static deleteConfig({
        name,
    }: {
        name: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/configs/update/{name}',
            path: {
                'name': name,
            },
        });
    }

}
