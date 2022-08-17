/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.31.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class InlineResponse2001 {
    'extraParams'?: { [key: string]: string; };
    'scopes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extraParams",
            "baseName": "extra_params",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2001.attributeTypeMap;
    }

    public constructor() {
    }
}

