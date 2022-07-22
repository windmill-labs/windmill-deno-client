/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.22.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class Schedule {
    'path': string;
    'editedBy': string;
    'editedAt': Date;
    'schedule': string;
    'offset': number;
    'enabled'?: boolean;
    'scriptPath': string;
    'isFlow': boolean;
    'args'?: { [key: string]: any; };
    'extraPerms': { [key: string]: boolean; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "schedule",
            "baseName": "schedule",
            "type": "string",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset_",
            "type": "number",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
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
            "name": "isFlow",
            "baseName": "is_flow",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "args",
            "baseName": "args",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "extraPerms",
            "baseName": "extra_perms",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Schedule.attributeTypeMap;
    }

    public constructor() {
    }
}

