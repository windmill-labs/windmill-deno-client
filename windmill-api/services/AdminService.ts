/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditWorkspaceUser } from '../models/EditWorkspaceUser.ts';
import type { User } from '../models/User.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AdminService {

    /**
     * get user (require admin privilege)
     * @returns User user created
     * @throws ApiError
     */
    public static getUser({
        workspace,
        username,
    }: {
        workspace: string,
        username: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/get/{username}',
            path: {
                'workspace': workspace,
                'username': username,
            },
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
