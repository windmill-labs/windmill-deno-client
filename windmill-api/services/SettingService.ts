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

    /**
     * test smtp
     * @returns string status
     * @throws ApiError
     */
    public static testSmtp({
        requestBody,
    }: {
        /**
         * test smtp payload
         */
        requestBody: {
            to: string;
            smtp: {
                host: string;
                username: string;
                password: string;
                port: number;
                from: string;
                tls_implicit: boolean;
            };
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_smtp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * test license key
     * @returns string status
     * @throws ApiError
     */
    public static testLicenseKey({
        requestBody,
    }: {
        /**
         * test license key
         */
        requestBody: {
            license_key: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_license_key',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * send stats
     * @returns string status
     * @throws ApiError
     */
    public static sendStats(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/send_stats',
        });
    }

}
