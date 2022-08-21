/**
 * Windmill server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.34.0
 * Contact: contact@windmill.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserWorkspaceListWorkspaces } from './UserWorkspaceListWorkspaces.ts';
import { HttpFile } from '../http/http.ts';

export class UserWorkspaceList {
    'email': string;
    'workspaces': Array<UserWorkspaceListWorkspaces>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "workspaces",
            "baseName": "workspaces",
            "type": "Array<UserWorkspaceListWorkspaces>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserWorkspaceList.attributeTypeMap;
    }

    public constructor() {
    }
}

