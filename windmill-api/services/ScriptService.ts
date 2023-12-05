/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HubScriptKind } from '../models/HubScriptKind.ts';
import type { NewScript } from '../models/NewScript.ts';
import type { NewScriptWithDraft } from '../models/NewScriptWithDraft.ts';
import type { Script } from '../models/Script.ts';
import type { ScriptHistory } from '../models/ScriptHistory.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class ScriptService {

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
        language: string;
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
     * get top hub scripts
     * @returns any hub scripts list
     * @throws ApiError
     */
    public static getTopHubScripts({
        limit,
        app,
        kind,
    }: {
        /**
         * query limit
         */
        limit?: number,
        /**
         * query scripts app
         */
        app?: string,
        /**
         * query scripts kind
         */
        kind?: string,
    }): CancelablePromise<{
        asks?: Array<{
            id: number;
            ask_id: number;
            summary: string;
            app: string;
            version_id: number;
            kind: HubScriptKind;
            votes: number;
            views: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts/hub/top',
            query: {
                'limit': limit,
                'app': app,
                'kind': kind,
            },
        });
    }

    /**
     * query hub scripts by similarity
     * @returns any script details
     * @throws ApiError
     */
    public static queryHubScripts({
        text,
        kind,
        limit,
        app,
    }: {
        /**
         * query text
         */
        text: string,
        /**
         * query scripts kind
         */
        kind?: string,
        /**
         * query limit
         */
        limit?: number,
        /**
         * query scripts app
         */
        app?: string,
    }): CancelablePromise<Array<{
        ask_id: number;
        id: number;
        version_id: number;
        summary: string;
        app: string;
        kind: HubScriptKind;
        score: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/embeddings/query_hub_scripts',
            query: {
                'text': text,
                'kind': kind,
                'limit': limit,
                'app': app,
            },
        });
    }

    /**
     * list scripts for search
     * @returns any script list
     * @throws ApiError
     */
    public static listSearchScript({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<{
        path: string;
        content: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/list_search',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list all scripts
     * @returns Script All scripts
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
        kinds,
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
         * are
         * ed.
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
         * script kinds to filter, split by comma
         *
         */
        kinds?: string,
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
                'kinds': kinds,
                'starred_only': starredOnly,
            },
        });
    }

    /**
     * list all scripts paths
     * @returns string list of script paths
     * @throws ApiError
     */
    public static listScriptPaths({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/list_paths',
            path: {
                'workspace': workspace,
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
        requestBody: NewScript,
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
     * Toggle ON and OFF the workspace error handler for a given script
     * @returns string error handler toggled
     * @throws ApiError
     */
    public static toggleWorkspaceErrorHandlerForScript({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * Workspace error handler enabled
         */
        requestBody: {
            muted?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/toggle_workspace_error_handler/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
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
     * delete script by hash (erase content but keep hash, require admin)
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
     * delete all scripts at a given path (require admin)
     * @returns string script path
     * @throws ApiError
     */
    public static deleteScriptByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/delete/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
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
     * get script by path with draft
     * @returns NewScriptWithDraft script details
     * @throws ApiError
     */
    public static getScriptByPathWithDraft({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<NewScriptWithDraft> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/get/draft/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * get history of a script by path
     * @returns ScriptHistory script history
     * @throws ApiError
     */
    public static getScriptHistoryByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Array<ScriptHistory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/scripts/history/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * update history of a script
     * @returns string success
     * @throws ApiError
     */
    public static updateScriptHistory({
        workspace,
        hash,
        path,
        requestBody,
    }: {
        workspace: string,
        hash: string,
        path: string,
        /**
         * Script deployment message
         */
        requestBody: {
            deployment_msg?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/scripts/history_update/h/{hash}/p/{path}',
            path: {
                'workspace': workspace,
                'hash': hash,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
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
     * raw script by path with a token (mostly used by lsp to be used with import maps to resolve scripts)
     * @returns string script content
     * @throws ApiError
     */
    public static rawScriptByPathTokened({
        workspace,
        token,
        path,
    }: {
        workspace: string,
        token: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scripts_u/tokened_raw/{workspace}/{token}/{path}',
            path: {
                'workspace': workspace,
                'token': token,
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
