/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLog } from '../models/AuditLog.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class AuditService {

    /**
     * get audit log (requires admin privilege)
     * @returns AuditLog an audit log
     * @throws ApiError
     */
    public static getAuditLog({
        workspace,
        id,
    }: {
        workspace: string,
        id: number,
    }): CancelablePromise<AuditLog> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/audit/get/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * list audit logs (requires admin privilege)
     * @returns AuditLog a list of audit logs
     * @throws ApiError
     */
    public static listAuditLogs({
        workspace,
        page,
        perPage,
        before,
        after,
        username,
        operation,
        resource,
        actionKind,
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
         * filter on created before (exclusive) timestamp
         */
        before?: string,
        /**
         * filter on created after (exclusive) timestamp
         */
        after?: string,
        /**
         * filter on exact username of user
         */
        username?: string,
        /**
         * filter on exact or prefix name of operation
         */
        operation?: string,
        /**
         * filter on exact or prefix name of resource
         */
        resource?: string,
        /**
         * filter on type of operation
         */
        actionKind?: 'Create' | 'Update' | 'Delete' | 'Execute',
    }): CancelablePromise<Array<AuditLog>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/audit/list',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'per_page': perPage,
                'before': before,
                'after': after,
                'username': username,
                'operation': operation,
                'resource': resource,
                'action_kind': actionKind,
            },
        });
    }

}
