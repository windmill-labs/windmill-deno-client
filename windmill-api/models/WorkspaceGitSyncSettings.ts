/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitRepositorySettings } from './GitRepositorySettings.ts';

export type WorkspaceGitSyncSettings = {
    include_path?: Array<string>;
    include_type?: Array<'script' | 'flow' | 'app' | 'folder' | 'resource' | 'variable' | 'secret' | 'resourcetype' | 'schedule' | 'user' | 'group'>;
    repositories?: Array<GitRepositorySettings>;
};

