/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.9.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MainArgSignatureArgs } from './MainArgSignatureArgs.ts';
import { HttpFile } from '../http/http.ts';

export class MainArgSignature {
    'starArgs': boolean;
    'starKwargs'?: boolean;
    'args': Array<MainArgSignatureArgs>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "starArgs",
            "baseName": "star_args",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "starKwargs",
            "baseName": "star_kwargs",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<MainArgSignatureArgs>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MainArgSignature.attributeTypeMap;
    }

    public constructor() {
    }
}

