/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateVariable = {
    path: string;
    value: string;
    is_secret: boolean;
    description: string;
    account?: number;
    is_oauth?: boolean;
};

