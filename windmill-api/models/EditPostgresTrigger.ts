/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicationData } from './PublicationData.ts';

export type EditPostgresTrigger = {
    replication_slot_name: string;
    publication_name: string;
    path: string;
    script_path: string;
    is_flow: boolean;
    enabled: boolean;
    postgres_resource_path: string;
    publication?: PublicationData;
};

