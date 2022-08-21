/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.32.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class Script {
    'workspaceId'?: string;
    'hash': string;
    'path': string;
    /**
    * The first element is the direct parent of the script, the second is the parent of the first, etc 
    */
    'parentHashes'?: Array<string>;
    'summary': string;
    'description'?: string;
    'content': string;
    'createdBy': string;
    'createdAt': Date;
    'archived': boolean;
    'schema'?: any;
    'deleted': boolean;
    'isTemplate': boolean;
    'extraPerms': { [key: string]: boolean; };
    'lock'?: string;
    'lockErrorLogs'?: string;
    'language': ScriptLanguageEnum;
    'isTrigger': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "workspaceId",
            "baseName": "workspace_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
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
            "name": "parentHashes",
            "baseName": "parent_hashes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
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
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "any",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isTemplate",
            "baseName": "is_template",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "extraPerms",
            "baseName": "extra_perms",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        },
        {
            "name": "lock",
            "baseName": "lock",
            "type": "string",
            "format": ""
        },
        {
            "name": "lockErrorLogs",
            "baseName": "lock_error_logs",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "ScriptLanguageEnum",
            "format": ""
        },
        {
            "name": "isTrigger",
            "baseName": "is_trigger",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Script.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ScriptLanguageEnum = "python3" | "deno" ;

