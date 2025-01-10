/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditNatsTrigger } from '../models/EditNatsTrigger.ts';
import type { NatsTrigger } from '../models/NatsTrigger.ts';
import type { NewNatsTrigger } from '../models/NewNatsTrigger.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class NatsTriggerService {

    /**
     * create nats trigger
     * @returns string nats trigger created
     * @throws ApiError
     */
    public static createNatsTrigger({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new nats trigger
         */
        requestBody: NewNatsTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/nats_triggers/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update nats trigger
     * @returns string nats trigger updated
     * @throws ApiError
     */
    public static updateNatsTrigger({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated trigger
         */
        requestBody: EditNatsTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/nats_triggers/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete nats trigger
     * @returns string nats trigger deleted
     * @throws ApiError
     */
    public static deleteNatsTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/nats_triggers/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get nats trigger
     * @returns NatsTrigger nats trigger deleted
     * @throws ApiError
     */
    public static getNatsTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<NatsTrigger> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/nats_triggers/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list nats triggers
     * @returns NatsTrigger nats trigger list
     * @throws ApiError
     */
    public static listNatsTriggers({
        workspace,
        page,
        perPage,
        path,
        isFlow,
        pathStart,
    }: {
        workspace: string,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        /**
         * filter by path
         */
        path?: string,
        isFlow?: boolean,
        pathStart?: string,
    }): CancelablePromise<Array<NatsTrigger>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/nats_triggers/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'path': path,
                'is_flow': isFlow,
                'path_start': pathStart,
            },
        });
    }

    /**
     * does nats trigger exists
     * @returns boolean nats trigger exists
     * @throws ApiError
     */
    public static existsNatsTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/nats_triggers/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * set enabled nats trigger
     * @returns string nats trigger enabled set
     * @throws ApiError
     */
    public static setNatsTriggerEnabled({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated nats trigger enable
         */
        requestBody: {
            enabled: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/nats_triggers/setenabled/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
