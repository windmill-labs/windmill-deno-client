/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class FavoriteService {

    /**
     * star item
     * @returns any star item
     * @throws ApiError
     */
    public static star({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody?: {
            path?: string;
            favorite_kind?: 'flow' | 'app' | 'script' | 'raw_app';
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/favorites/star',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * unstar item
     * @returns any unstar item
     * @throws ApiError
     */
    public static unstar({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody?: {
            path?: string;
            favorite_kind?: 'flow' | 'app' | 'script' | 'raw_app';
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/favorites/unstar',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
