/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    email: string;
    username: string;
    is_admin: boolean;
    name?: string;
    is_super_admin: boolean;
    created_at: string;
    operator: boolean;
    disabled: boolean;
    groups?: Array<string>;
    folders: Array<string>;
    folders_owners: Array<string>;
};

