/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.28.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowStatus } from './FlowStatus.ts';
import { FlowValue } from './FlowValue.ts';
import { HttpFile } from '../http/http.ts';

export class QueuedJob {
    'workspaceId'?: string;
    'id': string;
    'parentJob'?: string;
    'createdBy'?: string;
    'createdAt'?: Date;
    'startedAt'?: Date;
    'scheduledFor'?: Date;
    'running': boolean;
    'scriptPath'?: string;
    'scriptHash'?: string;
    'args'?: { [key: string]: any; };
    'logs'?: string;
    'rawCode'?: string;
    'canceled': boolean;
    'canceledBy'?: string;
    'canceledReason'?: string;
    'lastPing'?: Date;
    'jobKind': QueuedJobJobKindEnum;
    'schedulePath'?: string;
    /**
    * The user (u/userfoo) or group (g/groupfoo) whom  the execution of this script will be permissioned_as and by extension its DT_TOKEN. 
    */
    'permissionedAs': string;
    'flowStatus'?: FlowStatus;
    'rawFlow'?: FlowValue;
    'isFlowStep': boolean;
    'language'?: QueuedJobLanguageEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "logs",
            "baseName": "logs",
            "type": "string",
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
            "name": "lastPing",
            "baseName": "last_ping",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "jobKind",
            "baseName": "job_kind",
            "type": "QueuedJobJobKindEnum",
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
            "type": "QueuedJobLanguageEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QueuedJob.attributeTypeMap;
    }

    public constructor() {
    }
}


export type QueuedJobJobKindEnum = "script" | "preview" | "dependencies" | "flow" | "flowpreview" | "script_hub" ;
export type QueuedJobLanguageEnum = "python3" | "deno" ;

