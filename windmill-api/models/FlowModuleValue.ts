/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.26.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowValue } from './FlowValue.ts';
import { InputTransform } from './InputTransform.ts';
import { HttpFile } from '../http/http.ts';

export class FlowModuleValue {
    'value'?: FlowValue;
    'iterator'?: InputTransform;
    'skipFailures'?: boolean;
    'path'?: string;
    'content'?: string;
    'language'?: FlowModuleValueLanguageEnum;
    'type': FlowModuleValueTypeEnum;

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
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
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


export type FlowModuleValueLanguageEnum = "deno" | "python3" ;
export type FlowModuleValueTypeEnum = "script" | "flow" | "rawscript" | "forloopflow" ;

