/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TriggerExtraProperty } from './TriggerExtraProperty.ts';

export type PostgresTrigger = (TriggerExtraProperty & {
    path: string;
    script_path: string;
    is_flow: boolean;
    enabled: boolean;
    postgres_resource_path: string;
    publication_name: string;
    server_id?: string;
    replication_slot_name: string;
    error?: string;
    last_server_ping?: string;
});

