/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalSetting } from '../models/GlobalSetting.ts';

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
     * test object storage config
     * @returns string status
     * @throws ApiError
     */
    public static testObjectStorageConfig({
        requestBody,
    }: {
        /**
         * test object storage config
         */
        requestBody: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_object_storage_config',
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

    /**
     * get latest key renewal attempt
     * @returns any status
     * @throws ApiError
     */
    public static getLatestKeyRenewalAttempt(): CancelablePromise<{
        result: string;
        attempted_at: string;
    } | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/latest_key_renewal_attempt',
        });
    }

    /**
     * renew license key
     * @returns string status
     * @throws ApiError
     */
    public static renewLicenseKey(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/renew_license_key',
        });
    }

    /**
     * create customer portal session
     * @returns string url to portal
     * @throws ApiError
     */
    public static createCustomerPortalSession(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/customer_portal',
        });
    }

    /**
     * test metadata
     * @returns string status
     * @throws ApiError
     */
    public static testMetadata({
        requestBody,
    }: {
        /**
         * test metadata
         */
        requestBody: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/saml/test_metadata',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list global settings
     * @returns GlobalSetting list of settings
     * @throws ApiError
     */
    public static listGlobalSettings(): CancelablePromise<Array<GlobalSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/list_global',
        });
    }

}
