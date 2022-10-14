/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.38.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class FlowModuleSuspend {
    'requiredEvents'?: number;
    'timeout'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "requiredEvents",
            "baseName": "required_events",
            "type": "number",
            "format": ""
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowModuleSuspend.attributeTypeMap;
    }

    public constructor() {
    }
}

