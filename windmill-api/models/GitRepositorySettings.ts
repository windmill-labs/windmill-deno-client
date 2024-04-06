/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GitRepositorySettings = {
    script_path: string;
    git_repo_resource_path: string;
    use_individual_branch?: boolean;
    group_by_folder?: boolean;
    exclude_types_override?: Array<'script' | 'flow' | 'app' | 'folder' | 'resource' | 'variable' | 'secret' | 'resourcetype' | 'schedule' | 'user' | 'group'>;
};

