/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FlowStatusModule = {
    type: FlowStatusModule.type;
    job?: string;
    count?: number;
    iterator?: {
        index?: number;
        itered?: Array<any>;
        args?: any;
    };
    forloop_jobs?: Array<string>;
    branch_chosen?: {
        type?: FlowStatusModule.type;
        branch?: number;
    };
};

export namespace FlowStatusModule {

    export enum type {
        WAITING_FOR_PRIOR_STEPS = 'WaitingForPriorSteps',
        WAITING_FOR_EVENT = 'WaitingForEvent',
        WAITING_FOR_EXECUTOR = 'WaitingForExecutor',
        IN_PROGRESS = 'InProgress',
        SUCCESS = 'Success',
        FAILURE = 'Failure',
    }


}

