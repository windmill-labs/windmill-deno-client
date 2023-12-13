/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Retry = {
    constant?: {
        attempts?: number;
        seconds?: number;
    };
    exponential?: {
        attempts?: number;
        multiplier?: number;
        seconds?: number;
        random_factor?: number;
    };
};

