/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FlowStatusModule = {
    type: FlowStatusModule.type;
    id?: string;
    job?: string;
    count?: number;
    progress?: number;
    iterator?: {
        index?: number;
        itered?: Array<any>;
        args?: any;
    };
    flow_jobs?: Array<string>;
    flow_jobs_success?: Array<boolean>;
    branch_chosen?: {
        type: FlowStatusModule.type;
        branch?: number;
    };
    branchall?: {
        branch: number;
        len: number;
    };
    approvers?: Array<{
        resume_id: number;
        approver: string;
    }>;
    failed_retries?: Array<string>;
};

export namespace FlowStatusModule {

    export enum type {
        WAITING_FOR_PRIOR_STEPS = 'WaitingForPriorSteps',
        WAITING_FOR_EVENTS = 'WaitingForEvents',
        WAITING_FOR_EXECUTOR = 'WaitingForExecutor',
        IN_PROGRESS = 'InProgress',
        SUCCESS = 'Success',
        FAILURE = 'Failure',
    }


}

