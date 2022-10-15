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
     * delete workspace
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
            url: '/w/{workspace}/workspaces/delete',
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

}
