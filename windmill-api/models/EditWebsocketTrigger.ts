/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EditWebsocketTrigger = {
    url: string;
    path: string;
    script_path: string;
    is_flow: boolean;
    filters: Array<{
        key: string;
        value: any;
    }>;
};

