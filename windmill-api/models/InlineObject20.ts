/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.13.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class InlineObject20 {
    'owner': string;
    'write'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        },
        {
            "name": "write",
            "baseName": "write",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject20.attributeTypeMap;
    }

    public constructor() {
    }
}

