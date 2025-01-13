/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Capture } from '../models/Capture.ts';
import type { CaptureConfig } from '../models/CaptureConfig.ts';
import type { CaptureTriggerKind } from '../models/CaptureTriggerKind.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class CaptureService {

    /**
     * set capture config
     * @returns any capture config set
     * @throws ApiError
     */
    public static setCaptureConfig({
        workspace,
        requestBody,
    }: {
        workspace: string,
        /**
         * capture config
         */
        requestBody: {
            trigger_kind: CaptureTriggerKind;
            path: string;
            is_flow: boolean;
            trigger_config?: any;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/capture/set_config',
            path: {
                'workspace': workspace,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ping capture config
     * @returns any capture config pinged
     * @throws ApiError
     */
    public static pingCaptureConfig({
        workspace,
        triggerKind,
        runnableKind,
        path,
    }: {
        workspace: string,
        triggerKind: CaptureTriggerKind,
        runnableKind: 'script' | 'flow',
        path: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/w/{workspace}/capture/ping_config/{trigger_kind}/{runnable_kind}/{path}',
            path: {
                'workspace': workspace,
                'trigger_kind': triggerKind,
                'runnable_kind': runnableKind,
                'path': path,
            },
        });
    }

    /**
     * get capture configs for a script or flow
     * @returns CaptureConfig capture configs for a script or flow
     * @throws ApiError
     */
    public static getCaptureConfigs({
        workspace,
        runnableKind,
        path,
    }: {
        workspace: string,
        runnableKind: 'script' | 'flow',
        path: string,
    }): CancelablePromise<Array<CaptureConfig>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/capture/get_configs/{runnable_kind}/{path}',
            path: {
                'workspace': workspace,
                'runnable_kind': runnableKind,
                'path': path,
            },
        });
    }

    /**
     * list captures for a script or flow
     * @returns Capture list of captures for a script or flow
     * @throws ApiError
     */
    public static listCaptures({
        workspace,
        runnableKind,
        path,
        triggerKind,
        page,
        perPage,
    }: {
        workspace: string,
        runnableKind: 'script' | 'flow',
        path: string,
        triggerKind?: CaptureTriggerKind,
        /**
         * which page to return (start at 1, default 1)
         */
        page?: number,
        /**
         * number of items to return for a given page (default 30, max 100)
         */
        perPage?: number,
    }): CancelablePromise<Array<Capture>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/w/{workspace}/capture/list/{runnable_kind}/{path}',
            path: {
                'workspace': workspace,
                'runnable_kind': runnableKind,
                'path': path,
            },
            query: {
                'trigger_kind': triggerKind,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * delete a capture
     * @returns any capture deleted
     * @throws ApiError
     */
    public static deleteCapture({
        workspace,
        id,
    }: {
        workspace: string,
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/w/{workspace}/capture/{id}',
            path: {
                'workspace': workspace,
                'id': id,
            },
        });
    }

}
