/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.31.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowValue } from './FlowValue.ts';
import { InputTransform } from './InputTransform.ts';
import { HttpFile } from '../http/http.ts';

export class ForloopFlow {
    'value': FlowValue;
    'iterator': InputTransform;
    'skipFailures': boolean;
    'type': ForloopFlowTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "FlowValue",
            "format": ""
        },
        {
            "name": "iterator",
            "baseName": "iterator",
            "type": "InputTransform",
            "format": ""
        },
        {
            "name": "skipFailures",
            "baseName": "skip_failures",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ForloopFlowTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ForloopFlow.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ForloopFlowTypeEnum = "forloopflow" ;

