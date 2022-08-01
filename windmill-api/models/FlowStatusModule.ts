/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.26.3
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowStatusModuleIterator } from './FlowStatusModuleIterator.ts';
import { HttpFile } from '../http/http.ts';

export class FlowStatusModule {
    'type': FlowStatusModuleTypeEnum;
    'job'?: string;
    'event'?: string;
    'iterator'?: FlowStatusModuleIterator;
    'forloopJobs'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FlowStatusModuleTypeEnum",
            "format": ""
        },
        {
            "name": "job",
            "baseName": "job",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "string",
            "format": ""
        },
        {
            "name": "iterator",
            "baseName": "iterator",
            "type": "FlowStatusModuleIterator",
            "format": ""
        },
        {
            "name": "forloopJobs",
            "baseName": "forloop_jobs",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowStatusModule.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FlowStatusModuleTypeEnum = "WaitingForPriorSteps" | "WaitingForEvent" | "WaitingForExecutor" | "InProgress" | "Success" | "Failure" ;

