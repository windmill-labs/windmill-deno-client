/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.28.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OpenFlow } from './OpenFlow.ts';
import { HttpFile } from '../http/http.ts';

export class InlineResponse2004 {
    'flow'?: OpenFlow;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flow",
            "baseName": "flow",
            "type": "OpenFlow",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2004.attributeTypeMap;
    }

    public constructor() {
    }
}

