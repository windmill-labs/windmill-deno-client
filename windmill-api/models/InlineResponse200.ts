/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.17.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class InlineResponse200 {
    'workspaceId'?: string;
    'slackName'?: string;
    'slackTeamId'?: string;
    'slackCommandScript'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "workspaceId",
            "baseName": "workspace_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "slackName",
            "baseName": "slack_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "slackTeamId",
            "baseName": "slack_team_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "slackCommandScript",
            "baseName": "slack_command_script",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse200.attributeTypeMap;
    }

    public constructor() {
    }
}

