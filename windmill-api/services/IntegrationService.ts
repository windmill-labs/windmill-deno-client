/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class IntegrationService {

    /**
     * list hub integrations
     * @returns any integrations details
     * @throws ApiError
     */
    public static listHubIntegrations({
        kind,
    }: {
        /**
         * query integrations kind
         */
        kind?: string,
    }): CancelablePromise<Array<{
        name: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/hub/list',
            query: {
                'kind': kind,
            },
        });
    }

}
