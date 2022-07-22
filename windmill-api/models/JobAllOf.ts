/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.22.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class JobAllOf {
    'type'?: JobAllOfTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "JobAllOfTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JobAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JobAllOfTypeEnum = "CompletedJob" | "QueuedJob" ;

