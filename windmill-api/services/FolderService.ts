/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folder } from '../models/Folder.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class FolderService {

    /**
     * list folders
     * @returns Folder folder list
     * @throws ApiError
     */
    public static listFolders({
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
    }): CancelablePromise<Array<Folder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/folders/list',
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
     * list folder names
     * @returns string folder list
     * @throws ApiError
     */
    public static listFolderNames({
        workspace,
        onlyMemberOf,
    }: {
        workspace: string,
        /**
         * only list the folders the user is member of (default false)
         */
        onlyMemberOf?: boolean,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/folders/listnames',
            path: {
                'workspace': workspace,
            },
            query: {
                'only_member_of': onlyMemberOf,
            },
        });
    }

    /**
     * create folder
     * @returns string folder created
     * @throws ApiError
     */
    public static createFolder({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * create folder
         */
        requestBody: {
            name: string;
            owners?: Array<string>;
            extra_perms?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/folders/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update folder
     * @returns string folder updated
     * @throws ApiError
     */
    public static updateFolder({
        workspace,
        name,
        requestBody,
    }: {
        workspace: string,
        name: string,
        /**
         * update folder
         */
        requestBody: {
            owners?: Array<string>;
            extra_perms?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/folders/update/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete folder
     * @returns string folder deleted
     * @throws ApiError
     */
    public static deleteFolder({
        workspace,
        name,
    }: {
        workspace: string,
        name: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/folders/delete/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
        });
    }

    /**
     * get folder
     * @returns Folder folder
     * @throws ApiError
     */
    public static getFolder({
        workspace,
        name,
    }: {
        workspace: string,
        name: string,
    }): CancelablePromise<Folder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/folders/get/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
        });
    }

    /**
     * get folder usage
     * @returns any folder
     * @throws ApiError
     */
    public static getFolderUsage({
        workspace,
        name,
    }: {
        workspace: string,
        name: string,
    }): CancelablePromise<{
        scripts: number;
        flows: number;
        apps: number;
        resources: number;
        variables: number;
        schedules: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/folders/getusage/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
        });
    }

    /**
     * add owner to folder
     * @returns string owner added to folder
     * @throws ApiError
     */
    public static addOwnerToFolder({
        workspace,
        name,
        requestBody,
    }: {
        workspace: string,
        name: string,
        /**
         * owner user to folder
         */
        requestBody: {
            owner?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/folders/addowner/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * remove owner to folder
     * @returns string owner removed from folder
     * @throws ApiError
     */
    public static removeOwnerToFolder({
        workspace,
        name,
        requestBody,
    }: {
        workspace: string,
        name: string,
        /**
         * added owner to folder
         */
        requestBody: {
            owner?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/folders/removeowner/{name}',
            path: {
                'workspace': workspace,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
