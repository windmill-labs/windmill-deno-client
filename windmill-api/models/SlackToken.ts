/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.20.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SlackTokenBot } from './SlackTokenBot.ts';
import { HttpFile } from '../http/http.ts';

export class SlackToken {
    'accessToken': string;
    'teamId': string;
    'teamName': string;
    'bot': SlackTokenBot;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "teamId",
            "baseName": "team_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "teamName",
            "baseName": "team_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "bot",
            "baseName": "bot",
            "type": "SlackTokenBot",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SlackToken.attributeTypeMap;
    }

    public constructor() {
    }
}

