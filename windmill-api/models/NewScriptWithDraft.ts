/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NewScript } from './NewScript.ts';

export type NewScriptWithDraft = (NewScript & {
    draft?: NewScript;
    hash: string;
});

