/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewHttpTrigger = {
    path: string;
    script_path: string;
    route_path: string;
    is_flow: boolean;
    http_method: NewHttpTrigger.http_method;
    is_async: boolean;
    requires_auth: boolean;
};

export namespace NewHttpTrigger {

    export enum http_method {
        GET = 'get',
        POST = 'post',
        PUT = 'put',
        DELETE = 'delete',
        PATCH = 'patch',
    }


}

