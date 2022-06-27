/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.14.3
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class InlineObject10 {
    'path': string;
    'parentHash'?: string;
    'summary': string;
    'description': string;
    'content': string;
    'schema'?: any;
    'isTemplate'?: boolean;
    'lock'?: Array<string>;
    'language': InlineObject10LanguageEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentHash",
            "baseName": "parent_hash",
            "type": "string",
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
            "name": "schema",
            "baseName": "schema",
            "type": "any",
            "format": ""
        },
        {
            "name": "isTemplate",
            "baseName": "is_template",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lock",
            "baseName": "lock",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "InlineObject10LanguageEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject10.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InlineObject10LanguageEnum = "python3" | "deno" ;

