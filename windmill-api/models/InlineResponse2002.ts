/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.35.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse2002Asks } from './InlineResponse2002Asks.ts';
import { HttpFile } from '../http/http.ts';

export class InlineResponse2002 {
    'asks'?: Array<InlineResponse2002Asks>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "asks",
            "baseName": "asks",
            "type": "Array<InlineResponse2002Asks>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2002.attributeTypeMap;
    }

    public constructor() {
    }
}

