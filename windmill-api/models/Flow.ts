/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.20.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowValue } from './FlowValue.ts';
import { HttpFile } from '../http/http.ts';

export class Flow {
    'workspaceId'?: string;
    'path': string;
    'summary': string;
    'description'?: string;
    'value': FlowValue;
    'editedBy': string;
    'editedAt': Date;
    'archived': boolean;
    'schema'?: any;
    'extraPerms': { [key: string]: boolean; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "schema",
            "baseName": "schema",
            "type": "any",
            "format": ""
        },
        {
            "name": "extraPerms",
            "baseName": "extra_perms",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Flow.attributeTypeMap;
    }

    public constructor() {
    }
}

