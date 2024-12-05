/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CriticalAlert } from '../models/CriticalAlert.ts';
import type { GlobalSetting } from '../models/GlobalSetting.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class SettingService {

    /**
     * get global settings
     * @returns any status
     * @throws ApiError
     */
    public static getGlobal({
        key,
    }: {
        key: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/global/{key}',
            path: {
                'key': key,
            },
        });
    }

    /**
     * post global settings
     * @returns string status
     * @throws ApiError
     */
    public static setGlobal({
        key,
        requestBody,
    }: {
        key: string,
        /**
         * value set
         */
        requestBody: {
            value?: any;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/global/{key}',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get local settings
     * @returns any status
     * @throws ApiError
     */
    public static getLocal(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/local',
        });
    }

    /**
     * test smtp
     * @returns string status
     * @throws ApiError
     */
    public static testSmtp({
        requestBody,
    }: {
        /**
         * test smtp payload
         */
        requestBody: {
            to: string;
            smtp: {
                host: string;
                username: string;
                password: string;
                port: number;
                from: string;
                tls_implicit: boolean;
                disable_tls: boolean;
            };
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_smtp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * test critical channels
     * @returns string status
     * @throws ApiError
     */
    public static testCriticalChannels({
        requestBody,
    }: {
        /**
         * test critical channel payload
         */
        requestBody: Array<{
            email?: string;
            slack_channel?: string;
        }>,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_critical_channels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all critical alerts
     * @returns any Successfully retrieved all critical alerts
     * @throws ApiError
     */
    public static getCriticalAlerts({
        page = 1,
        pageSize = 10,
        acknowledged,
    }: {
        page?: number,
        pageSize?: number,
        acknowledged?: boolean | null,
    }): CancelablePromise<{
        alerts?: Array<CriticalAlert>;
        /**
         * Total number of rows matching the query.
         */
        total_rows?: number;
        /**
         * Total number of pages based on the page size.
         */
        total_pages?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/critical_alerts',
            query: {
                'page': page,
                'page_size': pageSize,
                'acknowledged': acknowledged,
            },
        });
    }

    /**
     * Acknowledge a critical alert
     * @returns string Successfully acknowledged the critical alert
     * @throws ApiError
     */
    public static acknowledgeCriticalAlert({
        id,
    }: {
        /**
         * The ID of the critical alert to acknowledge
         */
        id: number,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/critical_alerts/{id}/acknowledge',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Acknowledge all unacknowledged critical alerts
     * @returns string Successfully acknowledged all unacknowledged critical alerts.
     * @throws ApiError
     */
    public static acknowledgeAllCriticalAlerts(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/critical_alerts/acknowledge_all',
        });
    }

    /**
     * test license key
     * @returns string status
     * @throws ApiError
     */
    public static testLicenseKey({
        requestBody,
    }: {
        /**
         * test license key
         */
        requestBody: {
            license_key: string;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_license_key',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * test object storage config
     * @returns string status
     * @throws ApiError
     */
    public static testObjectStorageConfig({
        requestBody,
    }: {
        /**
         * test object storage config
         */
        requestBody: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/test_object_storage_config',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * send stats
     * @returns string status
     * @throws ApiError
     */
    public static sendStats(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/send_stats',
        });
    }

    /**
     * get latest key renewal attempt
     * @returns any status
     * @throws ApiError
     */
    public static getLatestKeyRenewalAttempt(): CancelablePromise<{
        result: string;
        attempted_at: string;
    } | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/latest_key_renewal_attempt',
        });
    }

    /**
     * renew license key
     * @returns string status
     * @throws ApiError
     */
    public static renewLicenseKey({
        licenseKey,
    }: {
        licenseKey?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/renew_license_key',
            query: {
                'license_key': licenseKey,
            },
        });
    }

    /**
     * create customer portal session
     * @returns string url to portal
     * @throws ApiError
     */
    public static createCustomerPortalSession({
        licenseKey,
    }: {
        licenseKey?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/customer_portal',
            query: {
                'license_key': licenseKey,
            },
        });
    }

    /**
     * test metadata
     * @returns string status
     * @throws ApiError
     */
    public static testMetadata({
        requestBody,
    }: {
        /**
         * test metadata
         */
        requestBody: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/saml/test_metadata',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list global settings
     * @returns GlobalSetting list of settings
     * @throws ApiError
     */
    public static listGlobalSettings(): CancelablePromise<Array<GlobalSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/list_global',
        });
    }

    /**
     * Get all critical alerts for this workspace
     * @returns any Successfully retrieved all critical alerts
     * @throws ApiError
     */
    public static workspaceGetCriticalAlerts({
        workspace,
        page = 1,
        pageSize = 10,
        acknowledged,
    }: {
        workspace: string,
        page?: number,
        pageSize?: number,
        acknowledged?: boolean | null,
    }): CancelablePromise<{
        alerts?: Array<CriticalAlert>;
        /**
         * Total number of rows matching the query.
         */
        total_rows?: number;
        /**
         * Total number of pages based on the page size.
         */
        total_pages?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/workspaces/critical_alerts',
            path: {
                'workspace': workspace,
            },
            query: {
                'page': page,
                'page_size': pageSize,
                'acknowledged': acknowledged,
            },
        });
    }

    /**
     * Acknowledge a critical alert for this workspace
     * @returns string Successfully acknowledged the critical alert
     * @throws ApiError
     */
    public static workspaceAcknowledgeCriticalAlert({
        workspace,
        id,
    }: {
        workspace: string,
        /**
         * The ID of the critical alert to acknowledge
         */
        id: number,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/critical_alerts/{id}/acknowledge',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

    /**
     * Acknowledge all unacknowledged critical alerts for this workspace
     * @returns string Successfully acknowledged all unacknowledged critical alerts.
     * @throws ApiError
     */
    public static workspaceAcknowledgeAllCriticalAlerts({
        workspace,
    }: {
        workspace: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/critical_alerts/acknowledge_all',
            path: {
                'workspace': workspace,
            },
        });
    }

    /**
     * Mute critical alert UI for this workspace
     * @returns string Successfully updated mute critical alert settings.
     * @throws ApiError
     */
    public static workspaceMuteCriticalAlertsUi({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * Boolean flag to mute critical alerts.
         */
        requestBody: {
            /**
             * Whether critical alerts should be muted.
             */
            mute_critical_alerts?: boolean;
        },
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/workspaces/critical_alerts/mute',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
