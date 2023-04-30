import { DeclaredCatalogSettings, ProviderCatalogSetting } from './catalogs.types';
import {
    DeclaredDocumentElementWriteSettings,
    ProviderDocumentElementWriteSettings
} from './document-element-write.types';

export type Settings = DeclaredCatalogSettings | DeclaredDocumentElementWriteSettings;

export type ProviderSettings = ProviderCatalogSetting | ProviderDocumentElementWriteSettings;

export type EswSettingsDeclaration = { version: 'v1', settings: Settings[] };

export const eswEmptySettings: EswSettingsDeclaration = { version: 'v1', settings: [] };
