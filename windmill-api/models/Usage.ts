/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.26.2
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class Usage {
    'durationMs'?: number;
    'jobs'?: number;
    'flows'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "durationMs",
            "baseName": "duration_ms",
            "type": "number",
            "format": ""
        },
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "number",
            "format": ""
        },
        {
            "name": "flows",
            "baseName": "flows",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Usage.attributeTypeMap;
    }

    public constructor() {
    }
}

