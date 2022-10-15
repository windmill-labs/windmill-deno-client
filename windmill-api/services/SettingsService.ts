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
