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

import { InlineResponse2003Flows } from './InlineResponse2003Flows.ts';
import { HttpFile } from '../http/http.ts';

export class InlineResponse2003 {
    'flows'?: Array<InlineResponse2003Flows>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flows",
            "baseName": "flows",
            "type": "Array<InlineResponse2003Flows>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2003.attributeTypeMap;
    }

    public constructor() {
    }
}

