/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditWorkspaceUser } from '../models/EditWorkspaceUser.ts';
import type { ExportedUser } from '../models/ExportedUser.ts';
import type { GlobalUserInfo } from '../models/GlobalUserInfo.ts';
import type { Login } from '../models/Login.ts';
import type { NewToken } from '../models/NewToken.ts';
import type { NewTokenImpersonate } from '../models/NewTokenImpersonate.ts';
import type { TruncatedToken } from '../models/TruncatedToken.ts';
import type { User } from '../models/User.ts';
import type { UserUsage } from '../models/UserUsage.ts';
import type { WorkspaceInvite } from '../models/WorkspaceInvite.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class UserService {

    /**
     * login with password
     * @returns string Successfully authenticated. The session ID is returned in a cookie named `token` and as plaintext response. Preferred method of authorization is through the bearer token. The cookie is only for browser convenience.
     *
     * @throws ApiError
     */
    public static login({
        requestBody,
    }: {
        /**
         * credentials
         */
        requestBody: Login,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * logout
     * @returns string clear cookies and clear token (if applicable)
     * @throws ApiError
     */
    public static logout(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
        });
    }

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
     * is owner of path
     * @returns boolean is owner
     * @throws ApiError
     */
    public static isOwnerOfPath({
        workspace,
        path,
    }: {
        workspace: string,
        path: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/is_owner/{path}',
            path: {
                'workspace': workspace,
                'path': path,
            },
        });
    }

    /**
     * set password
     * @returns string password set
     * @throws ApiError
     */
    public static setPassword({
        requestBody,
    }: {
        /**
         * set password
         */
        requestBody: {
            password: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/setpassword',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * set password for a specific user (require super admin)
     * @returns string password set
     * @throws ApiError
     */
    public static setPasswordForUser({
        user,
        requestBody,
    }: {
        user: string,
        /**
         * set password
         */
        requestBody: {
            password: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/set_password_of/{user}',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * set login type for a specific user (require super admin)
     * @returns string login type set
     * @throws ApiError
     */
    public static setLoginTypeForUser({
        user,
        requestBody,
    }: {
        user: string,
        /**
         * set login type
         */
        requestBody: {
            login_type: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/set_login_type/{user}',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * create user
     * @returns string user created
     * @throws ApiError
     */
    public static createUserGlobally({
        requestBody,
    }: {
        /**
         * user info
         */
        requestBody: {
            email: string;
            password: string;
            super_admin: boolean;
            name?: string;
            company?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * global update user (require super admin)
     * @returns string user updated
     * @throws ApiError
     */
    public static globalUserUpdate({
        email,
        requestBody,
    }: {
        email: string,
        /**
         * new user info
         */
        requestBody: {
            is_super_admin?: boolean;
            is_devops?: boolean;
            name?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/update/{email}',
            path: {
                'email': email,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * global username info (require super admin)
     * @returns any user renamed
     * @throws ApiError
     */
    public static globalUsernameInfo({
        email,
    }: {
        email: string,
    }): CancelablePromise<{
        username: string;
        workspace_usernames: Array<{
            workspace_id: string;
            username: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/username_info/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * global rename user (require super admin)
     * @returns string user renamed
     * @throws ApiError
     */
    public static globalUserRename({
        email,
        requestBody,
    }: {
        email: string,
        /**
         * new username
         */
        requestBody: {
            new_username: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/rename/{email}',
            path: {
                'email': email,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * global delete user (require super admin)
     * @returns string user deleted
     * @throws ApiError
     */
    public static globalUserDelete({
        email,
    }: {
        email: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/delete/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * global overwrite users (require super admin and EE)
     * @returns string Success message
     * @throws ApiError
     */
    public static globalUsersOverwrite({
        requestBody,
    }: {
        /**
         * List of users
         */
        requestBody: Array<ExportedUser>,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/overwrite',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * global export users (require super admin and EE)
     * @returns ExportedUser exported users
     * @throws ApiError
     */
    public static globalUsersExport(): CancelablePromise<Array<ExportedUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/export',
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

    /**
     * get current user email (if logged in)
     * @returns string user email
     * @throws ApiError
     */
    public static getCurrentEmail(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/email',
        });
    }

    /**
     * refresh the current token
     * @returns string new token
     * @throws ApiError
     */
    public static refreshUserToken({
        ifExpiringInLessThanS,
    }: {
        ifExpiringInLessThanS?: number,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/refresh_token',
            query: {
                'if_expiring_in_less_than_s': ifExpiringInLessThanS,
            },
        });
    }

    /**
     * get tutorial progress
     * @returns any tutorial progress
     * @throws ApiError
     */
    public static getTutorialProgress(): CancelablePromise<{
        progress?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/tutorial_progress',
        });
    }

    /**
     * update tutorial progress
     * @returns string tutorial progress
     * @throws ApiError
     */
    public static updateTutorialProgress({
        requestBody,
    }: {
        /**
         * progress update
         */
        requestBody: {
            progress?: number;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/tutorial_progress',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * leave instance
     * @returns string status
     * @throws ApiError
     */
    public static leaveInstance(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/leave_instance',
        });
    }

    /**
     * get current usage outside of premium workspaces
     * @returns number free usage
     * @throws ApiError
     */
    public static getUsage(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/usage',
        });
    }

    /**
     * get all runnables in every workspace
     * @returns any free all runnables
     * @throws ApiError
     */
    public static getRunnable(): CancelablePromise<{
        workspace: string;
        endpoint_async: string;
        endpoint_sync: string;
        endpoint_openai_sync: string;
        summary: string;
        description?: string;
        kind: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/all_runnables',
        });
    }

    /**
     * get current global whoami (if logged in)
     * @returns GlobalUserInfo user email
     * @throws ApiError
     */
    public static globalWhoami(): CancelablePromise<GlobalUserInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/whoami',
        });
    }

    /**
     * list all workspace invites
     * @returns WorkspaceInvite list all workspace invites
     * @throws ApiError
     */
    public static listWorkspaceInvites(): CancelablePromise<Array<WorkspaceInvite>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/list_invites',
        });
    }

    /**
     * whoami
     * @returns User user
     * @throws ApiError
     */
    public static whoami({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/whoami',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * accept invite to workspace
     * @returns string status
     * @throws ApiError
     */
    public static acceptInvite({
        requestBody,
    }: {
        /**
         * accept invite
         */
        requestBody: {
            workspace_id: string;
            username?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/accept_invite',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * decline invite to workspace
     * @returns string status
     * @throws ApiError
     */
    public static declineInvite({
        requestBody,
    }: {
        /**
         * decline invite
         */
        requestBody: {
            workspace_id: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/decline_invite',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * whois
     * @returns User user
     * @throws ApiError
     */
    public static whois({
        workspace,
        username,
    }: {
        workspace: string,
        username: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/whois/{username}',
            path: {
                'workspace': workspace,
                'username': username,
            },
        });
    }

    /**
     * exists email
     * @returns boolean user
     * @throws ApiError
     */
    public static existsEmail({
        email,
    }: {
        email: string,
    }): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/exists/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * list all users as super admin (require to be super amdin)
     * @returns GlobalUserInfo user
     * @throws ApiError
     */
    public static listUsersAsSuperAdmin({
        page,
        perPage,
        activeOnly,
    }: {
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
        /**
         * filter only active users
         */
        activeOnly?: boolean,
    }): CancelablePromise<Array<GlobalUserInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/list_as_super_admin',
            query: {
                'page': page,
                'per_page': perPage,
                'active_only': activeOnly,
            },
        });
    }

    /**
     * list users
     * @returns User user
     * @throws ApiError
     */
    public static listUsers({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/list',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list users usage
     * @returns UserUsage user
     * @throws ApiError
     */
    public static listUsersUsage({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<UserUsage>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/list_usage',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list usernames
     * @returns string user
     * @throws ApiError
     */
    public static listUsernames({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/list_usernames',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * get email from username
     * @returns string email
     * @throws ApiError
     */
    public static usernameToEmail({
        workspace,
        username,
    }: {
        workspace: string,
        username: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/users/username_to_email/{username}',
            path: {
                'workspace': workspace,
                'username': username,
            },
        });
    }

    /**
     * create token
     * @returns string token created
     * @throws ApiError
     */
    public static createToken({
        requestBody,
    }: {
        /**
         * new token
         */
        requestBody: NewToken,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/tokens/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * create token to impersonate a user (require superadmin)
     * @returns string token created
     * @throws ApiError
     */
    public static createTokenImpersonate({
        requestBody,
    }: {
        /**
         * new token
         */
        requestBody: NewTokenImpersonate,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/tokens/impersonate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete token
     * @returns string delete token
     * @throws ApiError
     */
    public static deleteToken({
        tokenPrefix,
    }: {
        tokenPrefix: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/tokens/delete/{token_prefix}',
            path: {
                'token_prefix': tokenPrefix,
            },
        });
    }

    /**
     * list token
     * @returns TruncatedToken truncated token
     * @throws ApiError
     */
    public static listTokens({
        excludeEphemeral,
        page,
        perPage,
    }: {
        excludeEphemeral?: boolean,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<TruncatedToken>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/tokens/list',
            query: {
                'exclude_ephemeral': excludeEphemeral,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * login with oauth authorization flow
     * @returns string Successfully authenticated. The session ID is returned in a cookie named `token` and as plaintext response. Preferred method of authorization is through the bearer token. The cookie is only for browser convenience.
     *
     * @throws ApiError
     */
    public static loginWithOauth({
        clientName,
        requestBody,
    }: {
        clientName: string,
        /**
         * Partially filled script
         */
        requestBody: {
            code?: string;
            state?: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/login_callback/{client_name}',
            path: {
                'client_name': clientName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
