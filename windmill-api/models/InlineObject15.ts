/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.26.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class InlineObject15 {
    'path': string;
    'parentHash'?: string;
    'summary': string;
    'description': string;
    'content': string;
    'schema'?: any;
    'isTemplate'?: boolean;
    'lock'?: Array<string>;
    'language': InlineObject15LanguageEnum;
    'isTrigger'?: boolean;

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
            "type": "InlineObject15LanguageEnum",
            "format": ""
        },
        {
            "name": "isTrigger",
            "baseName": "is_trigger",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject15.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InlineObject15LanguageEnum = "python3" | "deno" ;

