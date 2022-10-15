/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JavascriptTransform } from './JavascriptTransform.ts';
import type { StaticTransform } from './StaticTransform.ts';

export type InputTransform = (StaticTransform | JavascriptTransform);

