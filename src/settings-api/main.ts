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
import { DeclaredTextSettings, ProviderTextSettings, TextSettingsType } from './text.types';
import { DeclaredOperationSettings, OperationSettingsType, ProviderOperationSettings } from './operation.types';

export type Settings = DeclaredCatalogSettings | DeclaredDocumentElementWriteSettings | DeclaredDocumentRootReadSettings | DeclaredSelectSettings<any> | DeclaredTextSettings | DeclaredOperationSettings;

export type SettingsTypes = CatalogSettingsType | DocumentElementWriteSettingsType | DocumentRootReadSettingsType | SelectSettingsType | TextSettingsType | OperationSettingsType;

export type ProviderSettings = ProviderCatalogSetting | ProviderDocumentElementWriteSettings | ProviderDocumentRootReadSettings | ProviderSelectSettings<any> | ProviderTextSettings | ProviderOperationSettings;

export type EswSettingsDeclaration = { version: 'v1', settings: Settings[] };

export const eswEmptySettings: EswSettingsDeclaration = { version: 'v1', settings: [] };
