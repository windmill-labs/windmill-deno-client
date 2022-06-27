/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.14.2
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FlowModule } from './FlowModule.ts';
import { HttpFile } from '../http/http.ts';

export class FlowValue {
    'modules': Array<FlowModule>;
    'failureModule'?: FlowModule;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "modules",
            "baseName": "modules",
            "type": "Array<FlowModule>",
            "format": ""
        },
        {
            "name": "failureModule",
            "baseName": "failure_module",
            "type": "FlowModule",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlowValue.attributeTypeMap;
    }

    public constructor() {
    }
}

