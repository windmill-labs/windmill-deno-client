/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SettingService {

    /**
     * get global settings
     * @returns any status
     * @throws ApiError
     */
    public static getGlobal({
        key,
    }: {
        key: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/global/{key}',
            path: {
                'key': key,
            },
        });
    }

    /**
     * post global settings
     * @returns string status
     * @throws ApiError
     */
    public static setGlobal({
        key,
        requestBody,
    }: {
        key: string,
        /**
         * value set
         */
        requestBody: {
            value?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/global/{key}',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get local settings
     * @returns any status
     * @throws ApiError
     */
    public static getLocal(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/local',
        });
    }

}
