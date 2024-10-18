/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewWebsocketTrigger = {
    path: string;
    script_path: string;
    is_flow: boolean;
    url: string;
    enabled?: boolean;
    filters: Array<{
        key: string;
        value: any;
    }>;
};

