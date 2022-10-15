/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.38.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class RetryExponential {
    'attempts'?: number;
    'multiplier'?: number;
    'seconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attempts",
            "baseName": "attempts",
            "type": "number",
            "format": ""
        },
        {
            "name": "multiplier",
            "baseName": "multiplier",
            "type": "number",
            "format": ""
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RetryExponential.attributeTypeMap;
    }

    public constructor() {
    }
}

