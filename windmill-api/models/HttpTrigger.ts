/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HttpTrigger = {
    path: string;
    edited_by: string;
    edited_at: string;
    script_path: string;
    route_path: string;
    is_flow: boolean;
    extra_perms: Record<string, boolean>;
    email: string;
    workspace_id: string;
    http_method: HttpTrigger.http_method;
    is_async: boolean;
    requires_auth: boolean;
};

export namespace HttpTrigger {

    export enum http_method {
        GET = 'get',
        POST = 'post',
        PUT = 'put',
        DELETE = 'delete',
        PATCH = 'patch',
    }


}

