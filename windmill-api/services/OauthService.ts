/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenResponse } from '../models/TokenResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class OauthService {

    /**
     * connect slack callback
     * @returns string slack token
     * @throws ApiError
     */
    public static connectSlackCallback({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * code endpoint
         */
        requestBody: {
            code: string;
            state: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/oauth/connect_slack_callback',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * connect callback
     * @returns TokenResponse oauth token
     * @throws ApiError
     */
    public static connectCallback({
        clientName,
        requestBody,
    }: {
        clientName: string,
        /**
         * code endpoint
         */
        requestBody: {
            code: string;
            state: string;
        },
    }): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/connect_callback/{client_name}',
            path: {
                'client_name': clientName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * create OAuth account
     * @returns string account set
     * @throws ApiError
     */
    public static createAccount({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * code endpoint
         */
        requestBody: {
            refresh_token?: string;
            expires_in: number;
            owner: string;
            client: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/oauth/create_account',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * refresh token
     * @returns string token refreshed
     * @throws ApiError
     */
    public static refreshToken({
        workspace,
        id,
        requestBody,
    }: {
        workspace: string,
        id: number,
        /**
         * variable path
         */
        requestBody: {
            path: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/oauth/refresh_token/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * disconnect account
     * @returns string disconnected client
     * @throws ApiError
     */
    public static disconnectAccount({
        workspace,
        id,
    }: {
        workspace: string,
        id: number,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/oauth/disconnect/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * disconnect slack
     * @returns string disconnected slack
     * @throws ApiError
     */
    public static disconnectSlack({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/oauth/disconnect_slack',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * list oauth logins
     * @returns any list of oauth and saml login clients
     * @throws ApiError
     */
    public static listOAuthLogins(): CancelablePromise<{
        oauth: Array<string>;
        saml?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/list_logins',
        });
    }

    /**
     * list oauth connects
     * @returns any list of oauth connects clients
     * @throws ApiError
     */
    public static listOAuthConnects(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/list_connects',
        });
    }

}
