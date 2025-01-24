/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditPostgresTrigger } from '../models/EditPostgresTrigger.ts';
import type { NewPostgresTrigger } from '../models/NewPostgresTrigger.ts';
import type { PostgresTrigger } from '../models/PostgresTrigger.ts';
import type { PublicationData } from '../models/PublicationData.ts';
import type { Slot } from '../models/Slot.ts';
import type { SlotList } from '../models/SlotList.ts';
import type { TemplateScript } from '../models/TemplateScript.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class PostgresTriggerService {

    /**
     * check if postgres configuration is set to logical
     * @returns boolean boolean that indicates if postgres is set to logical level or not
     * @throws ApiError
     */
    public static isValidPostgresConfiguration({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/is_valid_postgres_configuration/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * create template script
     * @returns string custom id to retrieve template script
     * @throws ApiError
     */
    public static createTemplateScript({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * template script
         */
        requestBody: TemplateScript,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/create_template_script',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get template script
     * @returns string template script
     * @throws ApiError
     */
    public static getTemplateScript({
        workspace,
        id,
    }: {
        workspace: string,
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/get_template_script/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * list postgres replication slot
     * @returns SlotList list postgres slot
     * @throws ApiError
     */
    public static listPostgresReplicationSlot({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Array<SlotList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/slot/list/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * create replication slot for postgres
     * @returns string slot created
     * @throws ApiError
     */
    public static createPostgresReplicationSlot({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * new slot for postgres
         */
        requestBody: Slot,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/slot/create/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete postgres replication slot
     * @returns string postgres replication slot deleted
     * @throws ApiError
     */
    public static deletePostgresReplicationSlot({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * replication slot of postgres
         */
        requestBody: Slot,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/postgres_triggers/slot/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list postgres publication
     * @returns string database publication list
     * @throws ApiError
     */
    public static listPostgresPublication({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/publication/list/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get postgres publication
     * @returns PublicationData postgres publication get
     * @throws ApiError
     */
    public static getPostgresPublication({
        workspace,
        path,
        publication,
    }: {
        workspace: string,
        path: string,
        publication: string,
    }): CancelablePromise<PublicationData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/publication/get/{publication}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'publication': publication,
            },
        });
    }

    /**
     * create publication for postgres
     * @returns string publication created
     * @throws ApiError
     */
    public static createPostgresPublication({
        workspace,
        path,
        publication,
        requestBody,
    }: {
        workspace: string,
        path: string,
        publication: string,
        /**
         * new publication for postgres
         */
        requestBody: PublicationData,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/publication/create/{publication}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'publication': publication,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update publication for postgres
     * @returns string publication updated
     * @throws ApiError
     */
    public static updatePostgresPublication({
        workspace,
        path,
        publication,
        requestBody,
    }: {
        workspace: string,
        path: string,
        publication: string,
        /**
         * update publication for postgres
         */
        requestBody: PublicationData,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/publication/update/{publication}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'publication': publication,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete postgres publication
     * @returns string postgres publication deleted
     * @throws ApiError
     */
    public static deletePostgresPublication({
        workspace,
        path,
        publication,
    }: {
        workspace: string,
        path: string,
        publication: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/postgres_triggers/publication/delete/{publication}/{path}',
            path: {
                'workspace': workspace,
                'path': path,
                'publication': publication,
            },
        });
    }

    /**
     * create postgres trigger
     * @returns string postgres trigger created
     * @throws ApiError
     */
    public static createPostgresTrigger({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new postgres trigger
         */
        requestBody: NewPostgresTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update postgres trigger
     * @returns string postgres trigger updated
     * @throws ApiError
     */
    public static updatePostgresTrigger({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated trigger
         */
        requestBody: EditPostgresTrigger,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete postgres trigger
     * @returns string postgres trigger deleted
     * @throws ApiError
     */
    public static deletePostgresTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/postgres_triggers/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get postgres trigger
     * @returns PostgresTrigger get postgres trigger
     * @throws ApiError
     */
    public static getPostgresTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<PostgresTrigger> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list postgres triggers
     * @returns PostgresTrigger postgres trigger list
     * @throws ApiError
     */
    public static listPostgresTriggers({
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
    }): CancelablePromise<Array<PostgresTrigger>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/list',
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
     * does postgres trigger exists
     * @returns boolean postgres trigger exists
     * @throws ApiError
     */
    public static existsPostgresTrigger({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/postgres_triggers/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * set enabled postgres trigger
     * @returns string postgres trigger enabled set
     * @throws ApiError
     */
    public static setPostgresTriggerEnabled({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated postgres trigger enable
         */
        requestBody: {
            enabled: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/postgres_triggers/setenabled/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
