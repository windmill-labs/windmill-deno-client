/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.16.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowModuleValue } from './FlowModuleValue.ts';
import { InputTransform } from './InputTransform.ts';
import { HttpFile } from '../http/http.ts';

export class FlowModule {
    'inputTransform': { [key: string]: InputTransform; };
    'value': FlowModuleValue;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputTransform",
            "baseName": "input_transform",
            "type": "{ [key: string]: InputTransform; }",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "FlowModuleValue",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowModule.attributeTypeMap;
    }

    public constructor() {
    }
}

