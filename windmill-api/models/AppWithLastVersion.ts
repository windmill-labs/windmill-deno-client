/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Policy } from './Policy.ts';

export type AppWithLastVersion = {
    id: number;
    workspace_id: string;
    path: string;
    summary: string;
    versions: Array<number>;
    created_by: string;
    created_at: string;
    value: any;
    policy: Policy;
    execution_mode: AppWithLastVersion.execution_mode;
    extra_perms: Record<string, boolean>;
};

export namespace AppWithLastVersion {

    export enum execution_mode {
        VIEWER = 'viewer',
        PUBLISHER = 'publisher',
        ANONYMOUS = 'anonymous',
    }


}

