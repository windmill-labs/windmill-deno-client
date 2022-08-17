/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.31.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowStatus } from './FlowStatus.ts';
import { FlowValue } from './FlowValue.ts';
import { JobAllOf } from './JobAllOf.ts';
import { HttpFile } from '../http/http.ts';

export class Job {
    'type'?: JobTypeEnum;
    'workspaceId'?: string;
    'id': string;
    'parentJob'?: string;
    'createdBy': string;
    'createdAt': Date;
    'startedAt': Date;
    'durationMs': number;
    'success': boolean;
    'scriptPath'?: string;
    'scriptHash'?: string;
    'args'?: { [key: string]: any; };
    'result'?: any;
    'logs'?: string;
    'deleted'?: boolean;
    'rawCode'?: string;
    'canceled': boolean;
    'canceledBy'?: string;
    'canceledReason'?: string;
    'jobKind': JobJobKindEnum;
    'schedulePath'?: string;
    /**
    * The user (u/userfoo) or group (g/groupfoo) whom  the execution of this script will be permissioned_as and by extension its DT_TOKEN. 
    */
    'permissionedAs': string;
    'flowStatus'?: FlowStatus;
    'rawFlow'?: FlowValue;
    'isFlowStep': boolean;
    'language'?: JobLanguageEnum;
    'isSkipped': boolean;
    'scheduledFor'?: Date;
    'running': boolean;
    'lastPing'?: Date;

    static readonly discriminator: string | undefined = "type";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "JobTypeEnum",
            "format": ""
        },
        {
            "name": "workspaceId",
            "baseName": "workspace_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "parentJob",
            "baseName": "parent_job",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
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
            "name": "durationMs",
            "baseName": "duration_ms",
            "type": "number",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scriptPath",
            "baseName": "script_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "scriptHash",
            "baseName": "script_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "args",
            "baseName": "args",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "any",
            "format": ""
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "string",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rawCode",
            "baseName": "raw_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "canceled",
            "baseName": "canceled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canceledBy",
            "baseName": "canceled_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "canceledReason",
            "baseName": "canceled_reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "jobKind",
            "baseName": "job_kind",
            "type": "JobJobKindEnum",
            "format": ""
        },
        {
            "name": "schedulePath",
            "baseName": "schedule_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "permissionedAs",
            "baseName": "permissioned_as",
            "type": "string",
            "format": ""
        },
        {
            "name": "flowStatus",
            "baseName": "flow_status",
            "type": "FlowStatus",
            "format": ""
        },
        {
            "name": "rawFlow",
            "baseName": "raw_flow",
            "type": "FlowValue",
            "format": ""
        },
        {
            "name": "isFlowStep",
            "baseName": "is_flow_step",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "JobLanguageEnum",
            "format": ""
        },
        {
            "name": "isSkipped",
            "baseName": "is_skipped",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "scheduledFor",
            "baseName": "scheduled_for",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "running",
            "baseName": "running",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastPing",
            "baseName": "last_ping",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Job.attributeTypeMap;
    }

    public constructor() {
        
    }
}


export type JobTypeEnum = "CompletedJob" | "QueuedJob" ;
export type JobJobKindEnum = "script" | "preview" | "dependencies" | "flow" | "flowpreview" | "script_hub" ;
export type JobLanguageEnum = "python3" | "deno" ;

