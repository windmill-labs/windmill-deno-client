/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MainArgSignature } from '../models/MainArgSignature.ts';
import type { Script } from '../models/Script.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ScriptService {

    /**
     * list all available hub scripts
     * @returns any hub scripts list
     * @throws ApiError
     */
    public static listHubScripts(): CancelablePromise<{
        asks?: Array<{
            id: number;
            ask_id: number;
            summary: string;
            app: string;
            approved: boolean;
            kind: 'script' | 'failure' | 'trigger' | 'command' | 'approval';
            votes: number;
            views: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts/hub/list',
        });
    }

    /**
     * get hub script content by path
     * @returns string script details
     * @throws ApiError
     */
    public static getHubScriptContentByPath({
        path,
    }: {
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts/hub/get/{path}',
            path: {
                'path': path,
            },
        });
    }

    /**
     * get full hub script by path
     * @returns any script details
     * @throws ApiError
     */
    public static getHubScriptByPath({
        path,
    }: {
        path: string,
    }): CancelablePromise<{
        content: string;
        lockfile?: string;
        schema?: any;
        language: 'deno' | 'python3' | 'go' | 'bash';
        summary?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts/hub/get_full/{path}',
            path: {
                'path': path,
            },
        });
    }

    /**
     * list all available scripts
     * @returns Script All available scripts
     * @throws ApiError
     */
    public static listScripts({
        workspace,
        page,
        perPage,
        orderDesc,
        createdBy,
        pathStart,
        pathExact,
        firstParentHash,
        lastParentHash,
        parentHash,
        showArchived,
        isTemplate,
        kind,
        starredOnly,
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
         * order by desc order (default true)
         */
        orderDesc?: boolean,
        /**
         * mask to filter exact matching user creator
         */
        createdBy?: string,
        /**
         * mask to filter matching starting path
         */
        pathStart?: string,
        /**
         * mask to filter exact matching path
         */
        pathExact?: string,
        /**
         * mask to filter scripts whom first direct parent has exact hash
         */
        firstParentHash?: string,
        /**
         * mask to filter scripts whom last parent in the chain has exact hash.
         * Beware that each script stores only a limited number of parents. Hence
         * the last parent hash for a script is not necessarily its top-most parent.
         * To find the top-most parent you will have to jump from last to last hash
         * until finding the parent
         *
         */
        lastParentHash?: string,
        /**
         * is the hash present in the array of stored parent hashes for this script.
         * The same warning applies than for last_parent_hash. A script only store a
         * limited number of direct parent
         *
         */
        parentHash?: string,
        /**
         * (default false)
         * show also the archived files.
         * when multiple archived hash share the same path, only the ones with the latest create_at
         * are displayed.
         *
         */
        showArchived?: boolean,
        /**
         * (default regardless)
         * if true show only the templates
         * if false show only the non templates
         * if not defined, show all regardless of if the script is a template
         *
         */
        isTemplate?: boolean,
        /**
         * (default regardless)
         * script kind
         *
         */
        kind?: string,
        /**
         * (default false)
         * show only the starred items
         *
         */
        starredOnly?: boolean,
    }): CancelablePromise<Array<Script>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'order_desc': orderDesc,
                'created_by': createdBy,
                'path_start': pathStart,
                'path_exact': pathExact,
                'first_parent_hash': firstParentHash,
                'last_parent_hash': lastParentHash,
                'parent_hash': parentHash,
                'show_archived': showArchived,
                'is_template': isTemplate,
                'kind': kind,
                'starred_only': starredOnly,
            },
        });
    }

    /**
     * create script
     * @returns string script created
     * @throws ApiError
     */
    public static createScript({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Partially filled script
         */
        requestBody: {
            path: string;
            parent_hash?: string;
            summary: string;
            description: string;
            content: string;
            schema?: any;
            is_template?: boolean;
            lock?: Array<string>;
            language: 'python3' | 'deno' | 'go' | 'bash';
            kind?: 'script' | 'failure' | 'trigger' | 'command' | 'approval';
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * inspect python code to infer jsonschema of arguments
     * @returns MainArgSignature parsed args
     * @throws ApiError
     */
    public static pythonToJsonschema({
        requestBody,
    }: {
        /**
         * python code with the main function
         */
        requestBody: string,
    }): CancelablePromise<MainArgSignature> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/scripts/python/tojsonschema',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * inspect deno code to infer jsonschema of arguments
     * @returns MainArgSignature parsed args
     * @throws ApiError
     */
    public static denoToJsonschema({
        requestBody,
    }: {
        /**
         * deno code with the main function
         */
        requestBody: string,
    }): CancelablePromise<MainArgSignature> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/scripts/deno/tojsonschema',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * inspect bash code to infer jsonschema of arguments
     * @returns MainArgSignature parsed args
     * @throws ApiError
     */
    public static bashToJsonschema({
        requestBody,
    }: {
        /**
         * bash code with the main function
         */
        requestBody: string,
    }): CancelablePromise<MainArgSignature> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/scripts/bash/tojsonschema',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * inspect go code to infer jsonschema of arguments
     * @returns MainArgSignature parsed args
     * @throws ApiError
     */
    public static goToJsonschema({
        requestBody,
    }: {
        /**
         * go code with the main function
         */
        requestBody: string,
    }): CancelablePromise<MainArgSignature> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/scripts/go/tojsonschema',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * archive script by path
     * @returns string script archived
     * @throws ApiError
     */
    public static archiveScriptByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/archive/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * archive script by hash
     * @returns Script script details
     * @throws ApiError
     */
    public static archiveScriptByHash({
        workspace,
        hash,
    }: {
        workspace: string,
        hash: string,
    }): CancelablePromise<Script> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/archive/h/{hash}',
            path: {
                'workspace': workspace,
                'hash': hash,
            },
        });
    }

    /**
     * delete script by hash (erase content but keep hash)
     * @returns Script script details
     * @throws ApiError
     */
    public static deleteScriptByHash({
        workspace,
        hash,
    }: {
        workspace: string,
        hash: string,
    }): CancelablePromise<Script> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/delete/h/{hash}',
            path: {
                'workspace': workspace,
                'hash': hash,
            },
        });
    }

    /**
     * get script by path
     * @returns Script script details
     * @throws ApiError
     */
    public static getScriptByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Script> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/get/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * raw script by path
     * @returns string script content
     * @throws ApiError
     */
    public static rawScriptByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/raw/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * exists script by path
     * @returns boolean does it exists
     * @throws ApiError
     */
    public static existsScriptByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/exists/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get script by hash
     * @returns Script script details
     * @throws ApiError
     */
    public static getScriptByHash({
        workspace,
        hash,
    }: {
        workspace: string,
        hash: string,
    }): CancelablePromise<Script> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/get/h/{hash}',
            path: {
                'workspace': workspace,
                'hash': hash,
            },
        });
    }

    /**
     * raw script by hash
     * @returns string script content
     * @throws ApiError
     */
    public static rawScriptByHash({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/raw/h/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get script deployment status
     * @returns any script details
     * @throws ApiError
     */
    public static getScriptDeploymentStatus({
        workspace,
        hash,
    }: {
        workspace: string,
        hash: string,
    }): CancelablePromise<{
        lock?: string;
        lock_error_logs?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/deployment_status/h/{hash}',
            path: {
                'workspace': workspace,
                'hash': hash,
            },
        });
    }

}
