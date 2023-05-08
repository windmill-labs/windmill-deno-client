/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class GranularAclService {

    /**
     * get granular acls
     * @returns boolean acls
     * @throws ApiError
     */
    public static getGranularAcls({
        workspace,
        path,
        kind,
    }: {
        workspace: string,
        path: string,
        kind: 'script' | 'group_' | 'resource' | 'schedule' | 'variable' | 'flow' | 'folder' | 'app' | 'raw_app',
    }): CancelablePromise<Record<string, boolean>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/acls/get/{kind}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'kind': kind,
            },
        });
    }

    /**
     * add granular acls
     * @returns string granular acl added
     * @throws ApiError
     */
    public static addGranularAcls({
        workspace,
        path,
        kind,
        requestBody,
    }: {
        workspace: string,
        path: string,
        kind: 'script' | 'group_' | 'resource' | 'schedule' | 'variable' | 'flow' | 'folder' | 'app' | 'raw_app',
        /**
         * acl to add
         */
        requestBody: {
            owner: string;
            write?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/acls/add/{kind}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'kind': kind,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * remove granular acls
     * @returns string granular acl removed
     * @throws ApiError
     */
    public static removeGranularAcls({
        workspace,
        path,
        kind,
        requestBody,
    }: {
        workspace: string,
        path: string,
        kind: 'script' | 'group_' | 'resource' | 'schedule' | 'variable' | 'flow' | 'folder' | 'app' | 'raw_app',
        /**
         * acl to add
         */
        requestBody: {
            owner: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/acls/remove/{kind}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'kind': kind,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
