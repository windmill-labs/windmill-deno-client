/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuditLog = {
    id: number;
    timestamp: string;
    username: string;
    operation: AuditLog.operation;
    action_kind: AuditLog.action_kind;
    resource?: string;
    parameters?: any;
};

export namespace AuditLog {

    export enum operation {
        JOBS_RUN = 'jobs.run',
        SCRIPTS_CREATE = 'scripts.create',
        SCRIPTS_UPDATE = 'scripts.update',
        USERS_CREATE = 'users.create',
        USERS_DELETE = 'users.delete',
        USERS_SETPASSWORD = 'users.setpassword',
        USERS_UPDATE = 'users.update',
        USERS_LOGIN = 'users.login',
        USERS_TOKEN_CREATE = 'users.token.create',
        USERS_TOKEN_DELETE = 'users.token.delete',
        VARIABLES_CREATE = 'variables.create',
        VARIABLES_DELETE = 'variables.delete',
        VARIABLES_UPDATE = 'variables.update',
    }

    export enum action_kind {
        CREATED = 'Created',
        UPDATED = 'Updated',
        DELETE = 'Delete',
        EXECUTE = 'Execute',
    }


}

