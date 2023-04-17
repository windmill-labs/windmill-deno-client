/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInput } from '../models/CreateInput.ts';
import type { Input } from '../models/Input.ts';
import type { RunnableType } from '../models/RunnableType.ts';
import type { UpdateInput } from '../models/UpdateInput.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class InputService {

    /**
     * List Inputs used in previously completed jobs
     * @returns Input Input history for completed jobs
     * @throws ApiError
     */
    public static getInputHistory({
        workspace,
        runnableId,
        runnableType,
        page,
        perPage,
    }: {
        workspace: string,
        runnableId?: string,
        runnableType?: RunnableType,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<Input>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/inputs/history',
            path: {
                'workspace': workspace,
            },
            query: {
                'runnable_id': runnableId,
                'runnable_type': runnableType,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * List saved Inputs for a Runnable
     * @returns Input Saved Inputs for a Runnable
     * @throws ApiError
     */
    public static listInputs({
        workspace,
        runnableId,
        runnableType,
        page,
        perPage,
    }: {
        workspace: string,
        runnableId?: string,
        runnableType?: RunnableType,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<Input>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/inputs/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'runnable_id': runnableId,
                'runnable_type': runnableType,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Create an Input for future use in a script or flow
     * @returns string Input created
     * @throws ApiError
     */
    public static createInput({
        workspace,
        requestBody,
        runnableId,
        runnableType,
    }: {
        workspace: string,
        /**
         * Input
         */
        requestBody: CreateInput,
        runnableId?: string,
        runnableType?: RunnableType,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/inputs/create',
            path: {
                'workspace': workspace,
            },
            query: {
                'runnable_id': runnableId,
                'runnable_type': runnableType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update an Input
     * @returns string Input updated
     * @throws ApiError
     */
    public static updateInput({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * UpdateInput
         */
        requestBody: UpdateInput,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/inputs/update',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Saved Input
     * @returns string Input deleted
     * @throws ApiError
     */
    public static deleteInput({
        workspace,
        input,
    }: {
        workspace: string,
        input: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/inputs/delete/{input}',
            path: {
                'workspace': workspace,
                'input': input,
            },
        });
    }

}
