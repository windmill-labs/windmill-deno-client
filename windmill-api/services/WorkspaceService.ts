/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiResource } from '../models/AiResource.ts';
import type { CreateWorkspace } from '../models/CreateWorkspace.ts';
import type { LargeFileStorage } from '../models/LargeFileStorage.ts';
import type { OperatorSettings } from '../models/OperatorSettings.ts';
import type { ScriptArgs } from '../models/ScriptArgs.ts';
import type { UserWorkspaceList } from '../models/UserWorkspaceList.ts';
import type { Workspace } from '../models/Workspace.ts';
import type { WorkspaceDefaultScripts } from '../models/WorkspaceDefaultScripts.ts';
import type { WorkspaceDeployUISettings } from '../models/WorkspaceDeployUISettings.ts';
import type { WorkspaceGitSyncSettings } from '../models/WorkspaceGitSyncSettings.ts';
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
            username?: string;
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
     * get workspace name
     * @returns string status
     * @throws ApiError
     */
    public static getWorkspaceName({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/get_workspace_name',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * change workspace name
     * @returns string status
     * @throws ApiError
     */
    public static changeWorkspaceName({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody?: {
            new_name?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/change_workspace_name',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * change workspace id
     * @returns string status
     * @throws ApiError
     */
    public static changeWorkspaceId({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody?: {
            new_id?: string;
            new_name?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/change_workspace_id',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * change workspace id
     * @returns string status
     * @throws ApiError
     */
    public static changeWorkspaceColor({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody?: {
            color?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/change_workspace_color',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update operator settings for a workspace
     * Updates the operator settings for a specific workspace. Requires workspace admin privileges.
     * @returns string Operator settings updated successfully
     * @throws ApiError
     */
    public static updateOperatorSettings({
        workspace,
        requestBody,
    }: {
        workspace: string,
        requestBody: OperatorSettings,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/operator_settings',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
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
        auto_add?: boolean;
        plan?: string;
        automatic_billing: boolean;
        customer_id?: string;
        webhook?: string;
        deploy_to?: string;
        ai_resource?: AiResource;
        code_completion_enabled: boolean;
        error_handler?: string;
        error_handler_extra_args?: ScriptArgs;
        error_handler_muted_on_cancel: boolean;
        large_file_storage?: LargeFileStorage;
        git_sync?: WorkspaceGitSyncSettings;
        deploy_ui?: WorkspaceDeployUISettings;
        default_app?: string;
        default_scripts?: WorkspaceDefaultScripts;
        mute_critical_alerts?: boolean;
        color?: string;
        operator_settings?: OperatorSettings;
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
        automatic_billing: boolean;
        owner: string;
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
     * set automatic billing
     * @returns string status
     * @throws ApiError
     */
    public static setAutomaticBilling({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * automatic billing
         */
        requestBody: {
            automatic_billing: boolean;
            seats?: number;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/set_automatic_billing',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get threshold alert info
     * @returns any status
     * @throws ApiError
     */
    public static getThresholdAlert({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        threshold_alert_amount?: number;
        last_alert_sent?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/threshold_alert',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * set threshold alert info
     * @returns string status
     * @throws ApiError
     */
    public static setThresholdAlert({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * threshold alert info
         */
        requestBody: {
            threshold_alert_amount?: number;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/threshold_alert',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
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
            auto_add?: boolean;
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
            ai_resource?: AiResource;
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
        ai_provider: string;
        exists_ai_resource: boolean;
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
            git_sync_settings?: WorkspaceGitSyncSettings;
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
     * edit workspace deploy ui settings
     * @returns any status
     * @throws ApiError
     */
    public static editWorkspaceDeployUiSettings({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Workspace deploy UI settings
         */
        requestBody: {
            deploy_ui_settings?: WorkspaceDeployUISettings;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_deploy_ui_config',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit default app for workspace
     * @returns string status
     * @throws ApiError
     */
    public static editWorkspaceDefaultApp({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Workspace default app
         */
        requestBody: {
            default_app_path?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/edit_default_app',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit default scripts for workspace
     * @returns string status
     * @throws ApiError
     */
    public static editDefaultScripts({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Workspace default app
         */
        requestBody?: WorkspaceDefaultScripts,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/default_scripts',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get default scripts for workspace
     * @returns WorkspaceDefaultScripts status
     * @throws ApiError
     */
    public static getDefaultScripts({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<WorkspaceDefaultScripts> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/default_scripts',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * set environment variable
     * @returns string status
     * @throws ApiError
     */
    public static setEnvironmentVariable({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Workspace default app
         */
        requestBody: {
            name: string;
            value?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/set_environment_variable',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * retrieves the encryption key for this workspace
     * @returns any status
     * @throws ApiError
     */
    public static getWorkspaceEncryptionKey({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        key: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/encryption_key',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * update the encryption key for this workspace
     * @returns string status
     * @throws ApiError
     */
    public static setWorkspaceEncryptionKey({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * New encryption key
         */
        requestBody: {
            new_key: string;
            skip_reencrypt?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/encryption_key',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get default app for workspace
     * @returns any status
     * @throws ApiError
     */
    public static getWorkspaceDefaultApp({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        default_app_path?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/default_app',
            path: {
                'workspace': workspace,
            },
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

    /**
     * get usage
     * @returns number usage
     * @throws ApiError
     */
    public static getWorkspaceUsage({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/usage',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * get used triggers
     * @returns any status
     * @throws ApiError
     */
    public static getUsedTriggers({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<{
        http_routes_used: boolean;
        websocket_used: boolean;
        kafka_used: boolean;
        nats_used: boolean;
        postgres_used: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/used_triggers',
            path: {
                'workspace': workspace,
            },
        });
    }

}
