/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group.ts';
import type { InstanceGroup } from '../models/InstanceGroup.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class GroupService {

    /**
     * list instance groups
     * @returns InstanceGroup instance group list
     * @throws ApiError
     */
    public static listInstanceGroups(): CancelablePromise<Array<InstanceGroup>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/groups/list',
        });
    }

    /**
     * get instance group
     * @returns InstanceGroup instance group
     * @throws ApiError
     */
    public static getInstanceGroup({
        name,
    }: {
        name: string,
    }): CancelablePromise<InstanceGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/groups/get/{name}',
            path: {
                'name': name,
            },
        });
    }

    /**
     * list groups
     * @returns Group group list
     * @throws ApiError
     */
    public static listGroups({
        workspace,
        page,
        perPage,
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
    }): CancelablePromise<Array<Group>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/groups/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * list group names
     * @returns string group list
     * @throws ApiError
     */
    public static listGroupNames({
        workspace,
        onlyMemberOf,
    }: {
        workspace: string,
        /**
         * only list the groups the user is member of (default false)
         */
        onlyMemberOf?: boolean,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/groups/listnames',
            path: {
                'workspace': workspace,
            },
            query: {
                'only_member_of': onlyMemberOf,
            },
        });
    }

    /**
     * create group
     * @returns string group created
     * @throws ApiError
     */
    public static createGroup({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * create group
         */
        requestBody: {
            name: string;
            summary?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/groups/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update group
     * @returns string group updated
     * @throws ApiError
     */
    public static updateGroup({
        workspace,
        name,
        requestBody,
    }: {
        workspace: string,
        name: string,
        /**
         * updated group
         */
        requestBody: {
            summary?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/groups/update/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete group
     * @returns string group deleted
     * @throws ApiError
     */
    public static deleteGroup({
        workspace,
        name,
    }: {
        workspace: string,
        name: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/groups/delete/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
        });
    }

    /**
     * get group
     * @returns Group group
     * @throws ApiError
     */
    public static getGroup({
        workspace,
        name,
    }: {
        workspace: string,
        name: string,
    }): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/groups/get/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
        });
    }

    /**
     * add user to group
     * @returns string user added to group
     * @throws ApiError
     */
    public static addUserToGroup({
        workspace,
        name,
        requestBody,
    }: {
        workspace: string,
        name: string,
        /**
         * added user to group
         */
        requestBody: {
            username?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/groups/adduser/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * remove user to group
     * @returns string user removed from group
     * @throws ApiError
     */
    public static removeUserToGroup({
        workspace,
        name,
        requestBody,
    }: {
        workspace: string,
        name: string,
        /**
         * added user to group
         */
        requestBody: {
            username?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/groups/removeuser/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
