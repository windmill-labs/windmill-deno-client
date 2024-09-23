/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EditHttpTrigger = {
    path: string;
    script_path: string;
    route_path?: string;
    is_flow: boolean;
    http_method: EditHttpTrigger.http_method;
    is_async: boolean;
    requires_auth: boolean;
};

export namespace EditHttpTrigger {

    export enum http_method {
        GET = 'get',
        POST = 'post',
        PUT = 'put',
        DELETE = 'delete',
        PATCH = 'patch',
    }


}

