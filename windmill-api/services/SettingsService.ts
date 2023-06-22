/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SettingsService {

    /**
     * get backend version
     * @returns string git version of backend
     * @throws ApiError
     */
    public static backendVersion(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/version',
        });
    }

    /**
     * is backend up to date
     * @returns string is backend up to date
     * @throws ApiError
     */
    public static backendUptodate(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/uptodate',
        });
    }

    /**
     * get license id
     * @returns string get license id (empty if not ee)
     * @throws ApiError
     */
    public static getLicenseId(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ee_license',
        });
    }

    /**
     * get openapi yaml spec
     * @returns string openapi yaml file content
     * @throws ApiError
     */
    public static getOpenApiYaml(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/openapi.yaml',
        });
    }

}
