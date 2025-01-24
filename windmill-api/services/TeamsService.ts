/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamInfo } from '../models/TeamInfo.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import { OpenAPI } from '../core/OpenAPI.ts';
import { request as __request } from '../core/request.ts';

export class TeamsService {

    /**
     * synchronize Microsoft Teams information (teams/channels)
     * @returns TeamInfo Teams information successfully synchronized
     * @throws ApiError
     */
    public static syncTeams(): CancelablePromise<Array<TeamInfo>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/teams/sync',
        });
    }

}
