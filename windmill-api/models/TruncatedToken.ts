/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.27.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class TruncatedToken {
    'label'?: string;
    'expiration'?: Date;
    'tokenPrefix': string;
    'createdAt': Date;
    'lastUsedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "tokenPrefix",
            "baseName": "token_prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastUsedAt",
            "baseName": "last_used_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return TruncatedToken.attributeTypeMap;
    }

    public constructor() {
    }
}

