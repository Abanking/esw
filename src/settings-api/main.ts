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
import { DeclaredSelectSettings, ProviderSelectSettings, SelectSettingsType } from './select.types';

export type Settings = DeclaredCatalogSettings | DeclaredDocumentElementWriteSettings | DeclaredDocumentRootReadSettings | DeclaredSelectSettings<any>;

export type SettingsTypes = CatalogSettingsType | DocumentElementWriteSettingsType | DocumentRootReadSettingsType | SelectSettingsType;

export type ProviderSettings = ProviderCatalogSetting | ProviderDocumentElementWriteSettings | ProviderDocumentRootReadSettings | ProviderSelectSettings<any>;

export type EswSettingsDeclaration = { version: 'v1', settings: Settings[] };

export const eswEmptySettings: EswSettingsDeclaration = { version: 'v1', settings: [] };
