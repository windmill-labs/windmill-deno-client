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
        JOBS_RUN_SCRIPT = 'jobs.run.script',
        JOBS_RUN_PREVIEW = 'jobs.run.preview',
        JOBS_RUN_FLOW = 'jobs.run.flow',
        JOBS_RUN_FLOW_PREVIEW = 'jobs.run.flow_preview',
        JOBS_RUN_SCRIPT_HUB = 'jobs.run.script_hub',
        JOBS_RUN_DEPENDENCIES = 'jobs.run.dependencies',
        JOBS_RUN_IDENTITY = 'jobs.run.identity',
        JOBS_RUN_NOOP = 'jobs.run.noop',
        JOBS_FLOW_DEPENDENCIES = 'jobs.flow_dependencies',
        JOBS = 'jobs',
        JOBS_CANCEL = 'jobs.cancel',
        JOBS_FORCE_CANCEL = 'jobs.force_cancel',
        JOBS_DISAPPROVAL = 'jobs.disapproval',
        JOBS_DELETE = 'jobs.delete',
        ACCOUNT_DELETE = 'account.delete',
        OPENAI_REQUEST = 'openai.request',
        RESOURCES_CREATE = 'resources.create',
        RESOURCES_UPDATE = 'resources.update',
        RESOURCES_DELETE = 'resources.delete',
        RESOURCE_TYPES_CREATE = 'resource_types.create',
        RESOURCE_TYPES_UPDATE = 'resource_types.update',
        RESOURCE_TYPES_DELETE = 'resource_types.delete',
        SCHEDULE_CREATE = 'schedule.create',
        SCHEDULE_SETENABLED = 'schedule.setenabled',
        SCHEDULE_EDIT = 'schedule.edit',
        SCHEDULE_DELETE = 'schedule.delete',
        SCRIPTS_CREATE = 'scripts.create',
        SCRIPTS_UPDATE = 'scripts.update',
        SCRIPTS_ARCHIVE = 'scripts.archive',
        SCRIPTS_DELETE = 'scripts.delete',
        USERS_CREATE = 'users.create',
        USERS_DELETE = 'users.delete',
        USERS_UPDATE = 'users.update',
        USERS_LOGIN = 'users.login',
        USERS_LOGOUT = 'users.logout',
        USERS_ACCEPT_INVITE = 'users.accept_invite',
        USERS_DECLINE_INVITE = 'users.decline_invite',
        USERS_TOKEN_CREATE = 'users.token.create',
        USERS_TOKEN_DELETE = 'users.token.delete',
        USERS_ADD_TO_WORKSPACE = 'users.add_to_workspace',
        USERS_ADD_GLOBAL = 'users.add_global',
        USERS_SETPASSWORD = 'users.setpassword',
        USERS_IMPERSONATE = 'users.impersonate',
        USERS_LEAVE_WORKSPACE = 'users.leave_workspace',
        OAUTH_LOGIN = 'oauth.login',
        OAUTH_SIGNUP = 'oauth.signup',
        VARIABLES_CREATE = 'variables.create',
        VARIABLES_DELETE = 'variables.delete',
        VARIABLES_UPDATE = 'variables.update',
        FLOWS_CREATE = 'flows.create',
        FLOWS_UPDATE = 'flows.update',
        FLOWS_DELETE = 'flows.delete',
        FLOWS_ARCHIVE = 'flows.archive',
        APPS_CREATE = 'apps.create',
        APPS_UPDATE = 'apps.update',
        APPS_DELETE = 'apps.delete',
        FOLDER_CREATE = 'folder.create',
        FOLDER_UPDATE = 'folder.update',
        FOLDER_DELETE = 'folder.delete',
        FOLDER_ADD_OWNER = 'folder.add_owner',
        FOLDER_REMOVE_OWNER = 'folder.remove_owner',
        GROUP_CREATE = 'group.create',
        GROUP_DELETE = 'group.delete',
        GROUP_EDIT = 'group.edit',
        GROUP_ADDUSER = 'group.adduser',
        GROUP_REMOVEUSER = 'group.removeuser',
        IGROUP_CREATE = 'igroup.create',
        IGROUP_DELETE = 'igroup.delete',
        IGROUP_ADDUSER = 'igroup.adduser',
        IGROUP_REMOVEUSER = 'igroup.removeuser',
        VARIABLES_DECRYPT_SECRET = 'variables.decrypt_secret',
        WORKSPACES_EDIT_COMMAND_SCRIPT = 'workspaces.edit_command_script',
        WORKSPACES_EDIT_DEPLOY_TO = 'workspaces.edit_deploy_to',
        WORKSPACES_EDIT_AUTO_INVITE_DOMAIN = 'workspaces.edit_auto_invite_domain',
        WORKSPACES_EDIT_WEBHOOK = 'workspaces.edit_webhook',
        WORKSPACES_EDIT_COPILOT_CONFIG = 'workspaces.edit_copilot_config',
        WORKSPACES_EDIT_ERROR_HANDLER = 'workspaces.edit_error_handler',
        WORKSPACES_CREATE = 'workspaces.create',
        WORKSPACES_UPDATE = 'workspaces.update',
        WORKSPACES_ARCHIVE = 'workspaces.archive',
        WORKSPACES_UNARCHIVE = 'workspaces.unarchive',
        WORKSPACES_DELETE = 'workspaces.delete',
    }

    export enum action_kind {
        CREATED = 'Created',
        UPDATED = 'Updated',
        DELETE = 'Delete',
        EXECUTE = 'Execute',
    }


}

