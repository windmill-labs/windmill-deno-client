/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputTransform } from './InputTransform.ts';

export type PathFlow = {
    input_transforms: Record<string, InputTransform>;
    path: string;
    type: 'flow';
};

