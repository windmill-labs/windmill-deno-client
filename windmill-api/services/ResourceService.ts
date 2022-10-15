/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateResource } from '../models/CreateResource.ts';
import type { EditResource } from '../models/EditResource.ts';
import type { EditResourceType } from '../models/EditResourceType.ts';
import type { Resource } from '../models/Resource.ts';
import type { ResourceType } from '../models/ResourceType.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ResourceService {

    /**
     * create resource
     * @returns string resource created
     * @throws ApiError
     */
    public static createResource({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new resource
         */
        requestBody: CreateResource,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/resources/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete resource
     * @returns string resource deleted
     * @throws ApiError
     */
    public static deleteResource({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/resources/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * update resource
     * @returns string resource updated
     * @throws ApiError
     */
    public static updateResource({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated resource
         */
        requestBody: EditResource,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/resources/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get resource
     * @returns Resource resource deleted
     * @throws ApiError
     */
    public static getResource({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Resource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * does resource exists
     * @returns boolean does resource exists
     * @throws ApiError
     */
    public static existsResource({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list resources
     * @returns Resource resource list
     * @throws ApiError
     */
    public static listResource({
        workspace,
        page,
        perPage,
        resourceType,
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
         * resource_type to list from
         */
        resourceType?: string,
    }): CancelablePromise<Array<Resource>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'resource_type': resourceType,
            },
        });
    }

    /**
     * create resource_type
     * @returns string resource_type created
     * @throws ApiError
     */
    public static createResourceType({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new resource_type
         */
        requestBody: ResourceType,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/resources/type/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete resource_type
     * @returns string resource_type deleted
     * @throws ApiError
     */
    public static deleteResourceType({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/resources/type/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * update resource_type
     * @returns string resource_type updated
     * @throws ApiError
     */
    public static updateResourceType({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated resource_type
         */
        requestBody: EditResourceType,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/resources/type/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get resource_type
     * @returns ResourceType resource_type deleted
     * @throws ApiError
     */
    public static getResourceType({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<ResourceType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/type/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * does resource_type exists
     * @returns boolean does resource_type exist
     * @throws ApiError
     */
    public static existsResourceType({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/type/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list resource_types
     * @returns ResourceType resource_type list
     * @throws ApiError
     */
    public static listResourceType({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<ResourceType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/type/list',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list resource_types names
     * @returns string resource_type list
     * @throws ApiError
     */
    public static listResourceTypeNames({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/type/listnames',
            path: {
                'workspace': workspace,
            },
        });
    }

}
