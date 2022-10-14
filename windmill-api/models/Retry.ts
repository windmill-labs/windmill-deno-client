/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.38.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RetryConstant } from './RetryConstant.ts';
import { RetryExponential } from './RetryExponential.ts';
import { HttpFile } from '../http/http.ts';

export class Retry {
    'constant'?: RetryConstant;
    'exponential'?: RetryExponential;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "constant",
            "baseName": "constant",
            "type": "RetryConstant",
            "format": ""
        },
        {
            "name": "exponential",
            "baseName": "exponential",
            "type": "RetryExponential",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Retry.attributeTypeMap;
    }

    public constructor() {
    }
}

