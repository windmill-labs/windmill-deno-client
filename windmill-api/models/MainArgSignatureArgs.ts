/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.34.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class MainArgSignatureArgs {
    'name': string;
    'typ': string | any;
    'hasDefault'?: boolean;
    '_default'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "typ",
            "baseName": "typ",
            "type": "string | any",
            "format": ""
        },
        {
            "name": "hasDefault",
            "baseName": "has_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MainArgSignatureArgs.attributeTypeMap;
    }

    public constructor() {
    }
}

