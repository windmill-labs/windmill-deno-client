/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.36.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class SlackTokenBot {
    'botAccessToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "botAccessToken",
            "baseName": "bot_access_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SlackTokenBot.attributeTypeMap;
    }

    public constructor() {
    }
}

