/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flow } from '../models/Flow.ts';
import type { Input } from '../models/Input.ts';
import type { OpenFlow } from '../models/OpenFlow.ts';
import type { OpenFlowWPath } from '../models/OpenFlowWPath.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class FlowService {

    /**
     * list all hub flows
     * @returns any hub flows list
     * @throws ApiError
     */
    public static listHubFlows(): CancelablePromise<{
        flows?: Array<{
            id: number;
            flow_id: number;
            summary: string;
            apps: Array<string>;
            approved: boolean;
            votes: number;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/hub/list',
        });
    }

    /**
     * get hub flow by id
     * @returns any flow
     * @throws ApiError
     */
    public static getHubFlowById({
        id,
    }: {
        id: number,
    }): CancelablePromise<{
        flow?: OpenFlow;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/hub/get/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * list all flow paths
     * @returns string list of flow paths
     * @throws ApiError
     */
    public static listFlowPaths({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/flows/list_paths',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list flows for search
     * @returns any flow list
     * @throws ApiError
     */
    public static listSearchFlow({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<{
        path: string;
        value: any;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/flows/list_search',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list all flows
     * @returns any All flow
     * @throws ApiError
     */
    public static listFlows({
        workspace,
        page,
        perPage,
        orderDesc,
        createdBy,
        pathStart,
        pathExact,
        showArchived,
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
         * (default false)
         * show also the archived files.
         * when multiple archived hash share the same path, only the ones with the latest create_at
         * are displayed.
         *
         */
        showArchived?: boolean,
        /**
         * (default false)
         * show only the starred items
         *
         */
        starredOnly?: boolean,
    }): CancelablePromise<Array<(Flow & {
        has_draft?: boolean;
        draft_only?: boolean;
    })>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/flows/list',
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
                'show_archived': showArchived,
                'starred_only': starredOnly,
            },
        });
    }

    /**
     * get flow by path
     * @returns Flow flow details
     * @throws ApiError
     */
    public static getFlowByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<Flow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/flows/get/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * Toggle ON and OFF the workspace error handler for a given flow
     * @returns string error handler toggled
     * @throws ApiError
     */
    public static toggleWorkspaceErrorHandlerForFlow({
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
            url: '/w/{workspace}/flows/toggle_workspace_error_handler/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get flow by path with draft
     * @returns any flow details with draft
     * @throws ApiError
     */
    public static getFlowByPathWithDraft({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<(Flow & {
        draft?: Flow;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/flows/get/draft/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * exists flow by path
     * @returns boolean flow details
     * @throws ApiError
     */
    public static existsFlowByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/flows/exists/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * create flow
     * @returns string flow created
     * @throws ApiError
     */
    public static createFlow({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Partially filled flow
         */
        requestBody: (OpenFlowWPath & {
            draft_only?: boolean;
            deployment_message?: string;
        }),
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/flows/create',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update flow
     * @returns string flow updated
     * @throws ApiError
     */
    public static updateFlow({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * Partially filled flow
         */
        requestBody: (OpenFlowWPath & {
            deployment_message?: string;
        }),
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/flows/update/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * archive flow by path
     * @returns string flow archived
     * @throws ApiError
     */
    public static archiveFlowByPath({
        workspace,
        path,
        requestBody,
    }: {
        workspace: string,
        path: string,
        /**
         * archiveFlow
         */
        requestBody: {
            archived?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/flows/archive/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete flow by path
     * @returns string flow delete
     * @throws ApiError
     */
    public static deleteFlowByPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/flows/delete/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * list inputs for previous completed flow jobs
     * @returns Input input history for completed jobs with this flow path
     * @throws ApiError
     */
    public static getFlowInputHistoryByPath({
        workspace,
        path,
        page,
        perPage,
    }: {
        workspace: string,
        path: string,
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
            url: '/w/{workspace}/flows/input_history/p/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
