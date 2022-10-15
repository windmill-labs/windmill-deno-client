/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.38.1
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BranchAllBranches } from './BranchAllBranches.ts';
import { HttpFile } from '../http/http.ts';

export class BranchAll {
    'branches': Array<BranchAllBranches>;
    'type': BranchAllTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "branches",
            "baseName": "branches",
            "type": "Array<BranchAllBranches>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BranchAllTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BranchAll.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BranchAllTypeEnum = "branchall" ;

