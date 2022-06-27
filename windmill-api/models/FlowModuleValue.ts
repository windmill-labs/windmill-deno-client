/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.14.5
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class FlowModuleValue {
    'path': string;
    'type': FlowModuleValueTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FlowModuleValueTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowModuleValue.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FlowModuleValueTypeEnum = "script" | "flow" ;

