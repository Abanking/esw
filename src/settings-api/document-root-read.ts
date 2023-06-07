import { Settings } from './main';
import { ReadonlyDocumentElement } from '../document-element-api';

export type DocumentRootReadSettingsType = 'documentRootRead';

export type DeclaredDocumentRootReadSettings = {
    type: DocumentRootReadSettingsType;
    saveTo: string;
    isRequiredTrue?: boolean;
}

export type ProviderDocumentRootReadSettings = { type: DocumentRootReadSettingsType, value: boolean };

export type ProviderDocumentRootSettingsAssociation = {
    declaration: DeclaredDocumentRootReadSettings;
    providerValue: ProviderDocumentRootReadSettings;
    clientValue: ReadonlyDocumentElement<any>;
}

export const isDocumentRootReadSettingsDeclaration = (settings: Settings): settings is DeclaredDocumentRootReadSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && 'type' in settings && settings.type === 'documentRootRead' && typeof settings.saveTo === 'string';
};

export const isProviderDocumentRootReadSettings = (settings: any): settings is ProviderDocumentRootReadSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && 'type' in settings && settings.type === 'documentRootRead' && typeof settings.value === 'boolean';
};
