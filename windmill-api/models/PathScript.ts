/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputTransform } from './InputTransform.ts';

export type PathScript = {
    input_transforms: Record<string, InputTransform>;
    path: string;
    hash?: string;
    type: 'script';
    tag_override?: string;
    is_trigger?: boolean;
};

