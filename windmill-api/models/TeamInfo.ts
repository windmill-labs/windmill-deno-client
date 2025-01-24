/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelInfo } from './ChannelInfo.ts';

export type TeamInfo = {
    /**
     * The unique identifier of the Microsoft Teams team
     */
    team_id: string;
    /**
     * The display name of the Microsoft Teams team
     */
    team_name: string;
    /**
     * List of channels within the team
     */
    channels: Array<ChannelInfo>;
};

