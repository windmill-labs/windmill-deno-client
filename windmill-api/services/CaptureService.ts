/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CaptureService {

    /**
     * update flow preview capture
     * @returns void
     * @throws ApiError
     */
    public static updateCapture({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/capture_u/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * create flow preview capture
     * @returns any flow preview capture created
     * @throws ApiError
     */
    public static createCapture({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/w/{workspace}/capture/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get flow preview capture
     * @returns any captured flow preview
     * @throws ApiError
     */
    public static getCapture({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/capture/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            errors: {
                404: `capture does not exist for this flow`,
            },
        });
    }

}
