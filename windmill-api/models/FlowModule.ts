/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.36.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowModuleStopAfterIf } from './FlowModuleStopAfterIf.ts';
import { FlowModuleValue } from './FlowModuleValue.ts';
import { InputTransform } from './InputTransform.ts';
import { HttpFile } from '../http/http.ts';

export class FlowModule {
    'inputTransforms': { [key: string]: InputTransform; };
    'value': FlowModuleValue;
    'stopAfterIf'?: FlowModuleStopAfterIf;
    'summary'?: string;
    'suspend'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputTransforms",
            "baseName": "input_transforms",
            "type": "{ [key: string]: InputTransform; }",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "FlowModuleValue",
            "format": ""
        },
        {
            "name": "stopAfterIf",
            "baseName": "stop_after_if",
            "type": "FlowModuleStopAfterIf",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowModule.attributeTypeMap;
    }

    public constructor() {
    }
}

