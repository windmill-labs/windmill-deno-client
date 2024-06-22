/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Folder = {
    name: string;
    owners: Array<string>;
    extra_perms: Record<string, boolean>;
    summary?: string;
    created_by?: string;
    edited_at?: string;
};

