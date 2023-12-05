/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWorkspace } from '../models/CreateWorkspace.ts';
import type { LargeFileStorage } from '../models/LargeFileStorage.ts';
import type { ScriptArgs } from '../models/ScriptArgs.ts';
import type { UserWorkspaceList } from '../models/UserWorkspaceList.ts';
import type { Workspace } from '../models/Workspace.ts';
import type { WorkspaceGitSync } from '../models/WorkspaceGitSync.ts';
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
     * leave workspace
     * @returns string status
     * @throws ApiError
     */
    public static leaveWorkspace({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/leave',
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
        deploy_to?: string;
        openai_resource_path?: string;
        code_completion_enabled: boolean;
        error_handler?: string;
        error_handler_extra_args?: ScriptArgs;
        error_handler_muted_on_cancel?: boolean;
        large_file_storage?: LargeFileStorage;
        git_sync?: WorkspaceGitSync;
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
     * get deploy to
     * @returns any status
     * @throws ApiError
     */
    public static getDeployTo({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        deploy_to?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/get_deploy_to',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * get if workspace is premium
     * @returns boolean status
     * @throws ApiError
     */
    public static getIsPremium({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/is_premium',
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
        seats?: number;
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
     * run a job that sends a message to Slack
     * @returns any status
     * @throws ApiError
     */
    public static runSlackMessageTestJob({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * path to hub script to run and its corresponding args
         */
        requestBody: {
            hub_script_path?: string;
            channel?: string;
            test_msg?: string;
        },
    }): CancelablePromise<{
        job_uuid?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/run_slack_message_test_job',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit deploy to
     * @returns string status
     * @throws ApiError
     */
    public static editDeployTo({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody: {
            deploy_to?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_deploy_to',
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
            invite_all?: boolean;
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

    /**
     * edit copilot config
     * @returns string status
     * @throws ApiError
     */
    public static editCopilotConfig({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceCopilotConfig
         */
        requestBody: {
            openai_resource_path?: string;
            code_completion_enabled: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_copilot_config',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get copilot info
     * @returns any status
     * @throws ApiError
     */
    public static getCopilotInfo({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        exists_openai_resource_path: boolean;
        code_completion_enabled: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/get_copilot_info',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * edit error handler
     * @returns string status
     * @throws ApiError
     */
    public static editErrorHandler({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * WorkspaceErrorHandler
         */
        requestBody: {
            error_handler?: string;
            error_handler_extra_args?: ScriptArgs;
            error_handler_muted_on_cancel?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_error_handler',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit large file storage settings
     * @returns any status
     * @throws ApiError
     */
    public static editLargeFileStorageConfig({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * LargeFileStorage info
         */
        requestBody: {
            large_file_storage?: LargeFileStorage;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_large_file_storage_config',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit workspace git sync settings
     * @returns any status
     * @throws ApiError
     */
    public static editWorkspaceGitSyncConfig({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Workspace Git sync settings
         */
        requestBody: {
            git_sync_settings?: WorkspaceGitSync;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_git_sync_config',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get large file storage config
     * @returns LargeFileStorage status
     * @throws ApiError
     */
    public static getLargeFileStorageConfig({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<LargeFileStorage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/get_large_file_storage_config',
            path: {
                'workspace': workspace,
            },
        });
    }

}
