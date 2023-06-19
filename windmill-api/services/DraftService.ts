/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class DraftService {

    /**
     * create draft
     * @returns string draft created
     * @throws ApiError
     */
    public static createDraft({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody: {
            path: string;
            typ: 'flow' | 'script' | 'app';
            value?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/drafts/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete draft
     * @returns string draft deleted
     * @throws ApiError
     */
    public static deleteDraft({
        workspace,
        kind,
        path,
    }: {
        workspace: string,
        kind: 'script' | 'flow' | 'app',
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/drafts/delete/{kind}/{path}',
            path: {
                'workspace': workspace,
                'kind': kind,
                'path': path,
            },
        });
    }

}
