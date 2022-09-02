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

export class InlineObject13 {
    'refreshToken': string;
    'expiresIn': number;
    'owner': string;
    'client': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "refreshToken",
            "baseName": "refresh_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject13.attributeTypeMap;
    }

    public constructor() {
    }
}

