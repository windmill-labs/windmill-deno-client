/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GlobalUserInfo = {
    email: string;
    login_type: GlobalUserInfo.login_type;
    super_admin: boolean;
    devops?: boolean;
    verified: boolean;
    name?: string;
    company?: string;
    username?: string;
    operator_only?: boolean;
};

export namespace GlobalUserInfo {

    export enum login_type {
        PASSWORD = 'password',
        GITHUB = 'github',
    }


}

