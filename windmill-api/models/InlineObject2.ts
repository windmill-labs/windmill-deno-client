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

export class InlineObject2 {
    'isSuperAdmin'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isSuperAdmin",
            "baseName": "is_super_admin",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject2.attributeTypeMap;
    }

    public constructor() {
    }
}

