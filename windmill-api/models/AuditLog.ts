/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.8.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class AuditLog {
    'id': number;
    'timestamp': Date;
    'username': string;
    'operation': AuditLogOperationEnum;
    'actionKind': AuditLogActionKindEnum;
    'resource'?: string;
    'parameters'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "AuditLogOperationEnum",
            "format": ""
        },
        {
            "name": "actionKind",
            "baseName": "action_kind",
            "type": "AuditLogActionKindEnum",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuditLog.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AuditLogOperationEnum = "jobs.run" | "scripts.create" | "scripts.update" | "users.create" | "users.delete" | "users.setpassword" | "users.update" | "users.login" | "users.token.create" | "users.token.delete" | "variables.create" | "variables.delete" | "variables.update" ;
export type AuditLogActionKindEnum = "Created" | "Updated" | "Delete" | "Execute" ;

