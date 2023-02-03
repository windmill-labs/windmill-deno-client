/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWorkspace } from '../models/CreateWorkspace.ts';
import type { UserWorkspaceList } from '../models/UserWorkspaceList.ts';
import type { Workspace } from '../models/Workspace.ts';
import type { WorkspaceInvite } from '../models/WorkspaceInvite.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class WorkspaceService {

    /**
     * list all workspaces visible to me
     * @returns Workspace all workspaces
     * @throws ApiError
     */
    public static listWorkspaces(): CancelablePromise<Array<Workspace>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/list',
        });
    }

    /**
     * is domain allowed for auto invi
     * @returns boolean domain allowed or not
     * @throws ApiError
     */
    public static isDomainAllowed(): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/allowed_domain_auto_invite',
        });
    }

    /**
     * list all workspaces visible to me with user info
     * @returns UserWorkspaceList workspace with associated username
     * @throws ApiError
     */
    public static listUserWorkspaces(): CancelablePromise<UserWorkspaceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/users',
        });
    }

    /**
     * list all workspaces as super admin (require to be super admin)
     * @returns Workspace workspaces
     * @throws ApiError
     */
    public static listWorkspacesAsSuperAdmin({
        page,
        perPage,
    }: {
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<Workspace>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/list_as_superadmin',
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * create workspace
     * @returns string token created
     * @throws ApiError
     */
    public static createWorkspace({
        requestBody,
    }: {
        /**
         * new token
         */
        requestBody: CreateWorkspace,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * exists workspace
     * @returns boolean status
     * @throws ApiError
     */
    public static existsWorkspace({
        requestBody,
    }: {
        /**
         * id of workspace
         */
        requestBody: {
            id: string;
        },
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/exists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * exists username
     * @returns boolean status
     * @throws ApiError
     */
    public static existsUsername({
        requestBody,
    }: {
        requestBody: {
            id: string;
            username: string;
        },
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/exists_username',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * invite user to workspace
     * @returns string status
     * @throws ApiError
     */
    public static inviteUser({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceInvite
         */
        requestBody: {
            email: string;
            is_admin: boolean;
            operator: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/invite_user',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * add user to workspace
     * @returns string status
     * @throws ApiError
     */
    public static addUser({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceInvite
         */
        requestBody: {
            email: string;
            is_admin: boolean;
            username: string;
            operator: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/add_user',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete user invite
     * @returns string status
     * @throws ApiError
     */
    public static deleteInvite({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceInvite
         */
        requestBody: {
            email: string;
            is_admin: boolean;
            operator: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/delete_invite',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * archive workspace
     * @returns string status
     * @throws ApiError
     */
    public static archiveWorkspace({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/archive',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * unarchive workspace
     * @returns string status
     * @throws ApiError
     */
    public static unarchiveWorkspace({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/unarchive/{workspace}',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * delete workspace (require super admin)
     * @returns string status
     * @throws ApiError
     */
    public static deleteWorkspace({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/delete/{workspace}',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list pending invites for a workspace
     * @returns WorkspaceInvite user
     * @throws ApiError
     */
    public static listPendingInvites({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<WorkspaceInvite>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/list_pending_invites',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * get settings
     * @returns any status
     * @throws ApiError
     */
    public static getSettings({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        workspace_id?: string;
        slack_name?: string;
        slack_team_id?: string;
        slack_command_script?: string;
        auto_invite_domain?: string;
        auto_invite_operator?: boolean;
        plan?: string;
        customer_id?: string;
        webhook?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/get_settings',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * get premium info
     * @returns any status
     * @throws ApiError
     */
    public static getPremiumInfo({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        premium: boolean;
        usage?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/premium_info',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * edit slack command
     * @returns string status
     * @throws ApiError
     */
    public static editSlackCommand({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceInvite
         */
        requestBody: {
            slack_command_script?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_slack_command',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit auto invite
     * @returns string status
     * @throws ApiError
     */
    public static editAutoInvite({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceInvite
         */
        requestBody: {
            operator?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_auto_invite',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit webhook
     * @returns string status
     * @throws ApiError
     */
    public static editWebhook({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceWebhook
         */
        requestBody: {
            webhook?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_webhook',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
