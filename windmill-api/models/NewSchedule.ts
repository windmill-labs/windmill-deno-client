/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.35.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class NewSchedule {
    'path': string;
    'schedule': string;
    'offset'?: number;
    'scriptPath': string;
    'isFlow': boolean;
    'args': { [key: string]: any; };
    'enabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
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
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NewSchedule.attributeTypeMap;
    }

    public constructor() {
    }
}

