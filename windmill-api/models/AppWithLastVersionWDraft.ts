/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppWithLastVersion } from './AppWithLastVersion.ts';

export type AppWithLastVersionWDraft = (AppWithLastVersion & {
    draft_only?: boolean;
    draft?: any;
});

