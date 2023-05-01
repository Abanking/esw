import { CatalogSettingsType, DeclaredCatalogSettings, ProviderCatalogSetting } from './catalogs.types';
import {
    DeclaredDocumentElementWriteSettings, DocumentElementWriteSettingsType,
    ProviderDocumentElementWriteSettings
} from './document-element-write.types';
import {
    DeclaredDocumentRootReadSettings,
    DocumentRootReadSettingsType,
    ProviderDocumentRootReadSettings
} from './document-root-read';

export type Settings = DeclaredCatalogSettings | DeclaredDocumentElementWriteSettings | DeclaredDocumentRootReadSettings;

export type SettingsTypes = CatalogSettingsType | DocumentElementWriteSettingsType | DocumentRootReadSettingsType;

export type ProviderSettings = ProviderCatalogSetting | ProviderDocumentElementWriteSettings | ProviderDocumentRootReadSettings;

export type EswSettingsDeclaration = { version: 'v1', settings: Settings[] };

export const eswEmptySettings: EswSettingsDeclaration = { version: 'v1', settings: [] };
