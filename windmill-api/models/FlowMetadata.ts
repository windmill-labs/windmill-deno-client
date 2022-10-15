/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.38.3
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class FlowMetadata {
    'workspaceId'?: string;
    'path': string;
    'editedBy': string;
    'editedAt': Date;
    'archived': boolean;
    'extraPerms': any;
    'additionalProperties'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "workspaceId",
            "baseName": "workspace_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "editedBy",
            "baseName": "edited_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "editedAt",
            "baseName": "edited_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "extraPerms",
            "baseName": "extra_perms",
            "type": "any",
            "format": ""
        },
        {
            "name": "additionalProperties",
            "baseName": "additionalProperties",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

