/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.34.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowMetadata } from './FlowMetadata.ts';
import { FlowValue } from './FlowValue.ts';
import { OpenFlow } from './OpenFlow.ts';
import { HttpFile } from '../http/http.ts';

export class Flow {
    'summary': string;
    'description'?: string;
    'value': FlowValue;
    'schema'?: any;
    'workspaceId'?: string;
    'path': string;
    'editedBy': string;
    'editedAt': Date;
    'archived': boolean;
    'extraPerms': any;
    'additionalProperties'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "FlowValue",
            "format": ""
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "any",
            "format": ""
        },
        {
            "name": "workspaceId",
            "baseName": "workspace_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "editedBy",
            "baseName": "edited_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "editedAt",
            "baseName": "edited_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "extraPerms",
            "baseName": "extra_perms",
            "type": "any",
            "format": ""
        },
        {
            "name": "additionalProperties",
            "baseName": "additionalProperties",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Flow.attributeTypeMap;
    }

    public constructor() {
    }
}

