/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.33.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class Group {
    'name': string;
    'summary'?: string;
    'members'?: Array<string>;
    'extraPerms'?: { [key: string]: boolean; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
            "name": "members",
            "baseName": "members",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "extraPerms",
            "baseName": "extra_perms",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Group.attributeTypeMap;
    }

    public constructor() {
    }
}

