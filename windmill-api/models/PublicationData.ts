/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Relations } from './Relations.ts';

export type PublicationData = {
    table_to_track?: Array<Relations>;
    transaction_to_track: Array<string>;
};

