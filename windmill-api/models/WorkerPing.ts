/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.9.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class WorkerPing {
    'worker': string;
    'workerInstance': string;
    'pingAt': Date;
    'startedAt': Date;
    'ip': string;
    'jobsExecuted': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "worker",
            "baseName": "worker",
            "type": "string",
            "format": ""
        },
        {
            "name": "workerInstance",
            "baseName": "worker_instance",
            "type": "string",
            "format": ""
        },
        {
            "name": "pingAt",
            "baseName": "ping_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobsExecuted",
            "baseName": "jobs_executed",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return WorkerPing.attributeTypeMap;
    }

    public constructor() {
    }
}

