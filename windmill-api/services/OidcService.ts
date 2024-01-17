/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class OidcService {

    /**
     * get OIDC token (ee only)
     * @returns string new oidc token
     * @throws ApiError
     */
    public static getOidcToken({
        workspace,
        audience,
    }: {
        workspace: string,
        audience: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/oidc/token/{audience}',
            path: {
                'workspace': workspace,
                'audience': audience,
            },
        });
    }

}
