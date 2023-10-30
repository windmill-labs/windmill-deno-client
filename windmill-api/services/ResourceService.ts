/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateResource } from '../models/CreateResource.ts';
import type { EditResource } from '../models/EditResource.ts';
import type { EditResourceType } from '../models/EditResourceType.ts';
import type { ListableResource } from '../models/ListableResource.ts';
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
        updateIfExists,
    }: {
        workspace: string,
        /**
         * new resource
         */
        requestBody: CreateResource,
        updateIfExists?: boolean,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/resources/create',
            path: {
                'workspace': workspace,
            },
            query: {
                'update_if_exists': updateIfExists,
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
     * update resource value
     * @returns string resource value updated
     * @throws ApiError
     */
    public static updateResourceValue({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated resource
         */
        requestBody: {
            value?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/resources/update_value/{path}',
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
     * @returns Resource resource
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
     * get resource interpolated (variables and resources are fully unrolled)
     * @returns any resource value
     * @throws ApiError
     */
    public static getResourceValueInterpolated({
        workspace,
        path,
        jobId,
    }: {
        workspace: string,
        path: string,
        /**
         * job id
         */
        jobId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/get_value_interpolated/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'job_id': jobId,
            },
        });
    }

    /**
     * get resource value
     * @returns any resource value
     * @throws ApiError
     */
    public static getResourceValue({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/get_value/{path}',
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
     * @returns ListableResource resource list
     * @throws ApiError
     */
    public static listResource({
        workspace,
        page,
        perPage,
        resourceType,
        resourceTypeExclude,
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
         * resource_types to list from, separated by ',',
         */
        resourceType?: string,
        /**
         * resource_types to not list from, separated by ',',
         */
        resourceTypeExclude?: string,
    }): CancelablePromise<Array<ListableResource>> {
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
                'resource_type_exclude': resourceTypeExclude,
            },
        });
    }

    /**
     * list resources for search
     * @returns any resource list
     * @throws ApiError
     */
    public static listSearchResource({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<{
        path: string;
        value: any;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/list_search',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list resource names
     * @returns any resource list names
     * @throws ApiError
     */
    public static listResourceNames({
        workspace,
        name,
    }: {
        workspace: string,
        name: string,
    }): CancelablePromise<Array<{
        name: string;
        path: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/resources/list_names/{name}',
            path: {
                'workspace': workspace,
                'name': name,
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

    /**
     * query resource types by similarity
     * @returns any resource type details
     * @throws ApiError
     */
    public static queryResourceTypes({
        workspace,
        text,
        limit,
    }: {
        workspace: string,
        /**
         * query text
         */
        text: string,
        /**
         * query limit
         */
        limit?: number,
    }): CancelablePromise<Array<{
        name: string;
        score: number;
        schema?: any;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/embeddings/query_resource_types',
            path: {
                'workspace': workspace,
            },
            query: {
                'text': text,
                'limit': limit,
            },
        });
    }

}
