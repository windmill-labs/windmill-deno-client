/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.8.6
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class GlobalUserInfo {
    'email': string;
    'loginType': GlobalUserInfoLoginTypeEnum;
    'superAdmin': boolean;
    'verified': boolean;
    'name'?: string;
    'company'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "loginType",
            "baseName": "login_type",
            "type": "GlobalUserInfoLoginTypeEnum",
            "format": ""
        },
        {
            "name": "superAdmin",
            "baseName": "super_admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GlobalUserInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GlobalUserInfoLoginTypeEnum = "password" | "github" ;

