/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.38.3
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class FlowStatusModuleBranchChosen {
    'type'?: FlowStatusModuleBranchChosenTypeEnum;
    'branch'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FlowStatusModuleBranchChosenTypeEnum",
            "format": ""
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowStatusModuleBranchChosen.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FlowStatusModuleBranchChosenTypeEnum = "branch" | "default" ;

