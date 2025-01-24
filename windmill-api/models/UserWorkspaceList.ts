/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperatorSettings } from './OperatorSettings.ts';

export type UserWorkspaceList = {
    email: string;
    workspaces: Array<{
        id: string;
        name: string;
        username: string;
        color: string;
        operator_settings?: OperatorSettings;
    }>;
};

