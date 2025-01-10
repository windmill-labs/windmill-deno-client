/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TriggersCount = {
    primary_schedule?: {
        schedule?: string;
    };
    schedule_count?: number;
    http_routes_count?: number;
    webhook_count?: number;
    email_count?: number;
    websocket_count?: number;
    kafka_count?: number;
    nats_count?: number;
};

