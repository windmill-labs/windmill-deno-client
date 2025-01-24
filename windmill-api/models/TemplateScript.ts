/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Language } from './Language.ts';
import type { Relations } from './Relations.ts';

export type TemplateScript = {
    postgres_resource_path: string;
    relations: Array<Relations>;
    language: Language;
};

