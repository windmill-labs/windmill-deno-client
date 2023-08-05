/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BranchAll } from './BranchAll.ts';
import type { BranchOne } from './BranchOne.ts';
import type { ForloopFlow } from './ForloopFlow.ts';
import type { Graphql } from './Graphql.ts';
import type { Identity } from './Identity.ts';
import type { PathFlow } from './PathFlow.ts';
import type { PathScript } from './PathScript.ts';
import type { RawScript } from './RawScript.ts';

export type FlowModuleValue = (RawScript | PathScript | PathFlow | ForloopFlow | BranchOne | BranchAll | Identity | Graphql);

