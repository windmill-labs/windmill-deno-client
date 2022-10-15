/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualVariable } from '../models/ContextualVariable.ts';
import type { CreateVariable } from '../models/CreateVariable.ts';
import type { EditVariable } from '../models/EditVariable.ts';
import type { ListableVariable } from '../models/ListableVariable.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class VariableService {

    /**
     * create variable
     * @returns string variable created
     * @throws ApiError
     */
    public static createVariable({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * new variable
         */
        requestBody: CreateVariable,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/variables/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete variable
     * @returns string variable deleted
     * @throws ApiError
     */
    public static deleteVariable({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/variables/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * update variable
     * @returns string variable updated
     * @throws ApiError
     */
    public static updateVariable({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * updated variable
         */
        requestBody: EditVariable,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/variables/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get variable
     * @returns ListableVariable variable
     * @throws ApiError
     */
    public static getVariable({
        workspace,
        path,
        decryptSecret,
    }: {
        workspace: string,
        path: string,
        /**
         * ask to decrypt secret if this variable is secret
         * (if not secret no effect, default: true)
         *
         */
        decryptSecret?: boolean,
    }): CancelablePromise<ListableVariable> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/variables/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'decrypt_secret': decryptSecret,
            },
        });
    }

    /**
     * does variable exists at path
     * @returns boolean variable
     * @throws ApiError
     */
    public static existsVariable({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/variables/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list variables
     * @returns ListableVariable variable list
     * @throws ApiError
     */
    public static listVariable({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<ListableVariable>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/variables/list',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list contextual variables
     * @returns ContextualVariable contextual variable list
     * @throws ApiError
     */
    public static listContextualVariables({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<ContextualVariable>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/variables/list_contextual',
            path: {
                'workspace': workspace,
            },
        });
    }

}
