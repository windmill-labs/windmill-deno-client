/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtraPerms } from './ExtraPerms.ts';

export type FlowMetadata = {
    workspace_id?: string;
    path: string;
    edited_by: string;
    edited_at: string;
    archived: boolean;
    extra_perms: ExtraPerms;
    starred?: boolean;
    draft_only?: boolean;
    tag?: string;
    ws_error_handler_muted?: boolean;
    priority?: number;
    dedicated_worker?: boolean;
    timeout?: number;
    visible_to_runner_only?: boolean;
};

