/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditWorkspaceUser } from '../models/EditWorkspaceUser.ts';
import type { NewUser } from '../models/NewUser.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdminService {

    /**
     * create user (require admin privilege)
     * @returns string user created
     * @throws ApiError
     */
    public static createUser({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new user
         */
        requestBody: NewUser,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/users/add',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update user (require admin privilege)
     * @returns string edited user
     * @throws ApiError
     */
    public static updateUser({
        workspace,
        username,
        requestBody,
    }: {
        workspace: string,
        username: string,
        /**
         * new user
         */
        requestBody: EditWorkspaceUser,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/users/update/{username}',
            path: {
                'workspace': workspace,
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete user (require admin privilege)
     * @returns string delete user
     * @throws ApiError
     */
    public static deleteUser({
        workspace,
        username,
    }: {
        workspace: string,
        username: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/users/delete/{username}',
            path: {
                'workspace': workspace,
                'username': username,
            },
        });
    }

}
