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

export class Preview {
    'content': string;
    'path'?: string;
    'args': { [key: string]: any; };
    'language': PreviewLanguageEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
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
            "name": "args",
            "baseName": "args",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "PreviewLanguageEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Preview.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PreviewLanguageEnum = "python3" | "deno" ;

