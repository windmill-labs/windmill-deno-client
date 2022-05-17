/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class EditSchedule {
    'schedule': string;
    'scriptPath': string;
    'isFlow': boolean;
    'args': { [key: string]: any; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string",
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
        }    ];

    static getAttributeTypeMap() {
        return EditSchedule.attributeTypeMap;
    }

    public constructor() {
    }
}

