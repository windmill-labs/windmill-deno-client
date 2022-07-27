/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.24.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class InputTransform {
    'type'?: InputTransformTypeEnum;
    'step'?: number;
    'value'?: any;
    'expr'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InputTransformTypeEnum",
            "format": ""
        },
        {
            "name": "step",
            "baseName": "step",
            "type": "number",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        {
            "name": "expr",
            "baseName": "expr",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InputTransform.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InputTransformTypeEnum = "static" | "javascript" ;

