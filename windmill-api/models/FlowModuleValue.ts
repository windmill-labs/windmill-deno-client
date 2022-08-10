/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.29.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowValue } from './FlowValue.ts';
import { ForloopFlow } from './ForloopFlow.ts';
import { InputTransform } from './InputTransform.ts';
import { PathFlow } from './PathFlow.ts';
import { PathScript } from './PathScript.ts';
import { RawScript } from './RawScript.ts';
import { HttpFile } from '../http/http.ts';

export class FlowModuleValue {
    'content': string;
    'language': FlowModuleValueLanguageEnum;
    'path': string;
    'type': FlowModuleValueTypeEnum;
    'value': FlowValue;
    'iterator': InputTransform;
    'skipFailures': boolean;

    static readonly discriminator: string | undefined = "type";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "FlowModuleValueLanguageEnum",
            "format": ""
        },
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
        },
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
        }    ];

    static getAttributeTypeMap() {
        return FlowModuleValue.attributeTypeMap;
    }

    public constructor() {
        this.type = "FlowModuleValue";
    }
}


export type FlowModuleValueLanguageEnum = "deno" | "python3" ;
export type FlowModuleValueTypeEnum = "flow" ;

