export declare const previousResults: Record<string, string>;
export declare function getGithubDefaultBranchName(params: {
    owner: string;
    repo: string;
}): Promise<string>;
export declare function getGithubDefaultBranchNameSync(params: {
    owner: string;
    repo: string;
}): string;
