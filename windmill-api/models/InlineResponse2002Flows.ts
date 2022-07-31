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

export class InlineResponse2002Flows {
    'id': number;
    'flowId': number;
    'summary': string;
    'apps': Array<string>;
    'approved': boolean;
    'votes': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "flowId",
            "baseName": "flow_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "apps",
            "baseName": "apps",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "approved",
            "baseName": "approved",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "votes",
            "baseName": "votes",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2002Flows.attributeTypeMap;
    }

    public constructor() {
    }
}

