/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.27.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class FlowStatusModuleIterator {
    'index'?: number;
    'itered'?: Array<any>;
    'args'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": ""
        },
        {
            "name": "itered",
            "baseName": "itered",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "args",
            "baseName": "args",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowStatusModuleIterator.attributeTypeMap;
    }

    public constructor() {
    }
}

