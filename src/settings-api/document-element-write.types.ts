import { Settings } from './main';
import { DocumentElement } from '../document-element-api';

export type DocumentElementWriteSettingsType = 'documentElementWrite';

export type DeclaredDocumentElementWriteSettings = {
    type: DocumentElementWriteSettingsType;
    label: string;
    saveTo: string;
    isRequired?: boolean;
}

export type ProviderDocumentElementWriteSettings = { type: DocumentElementWriteSettingsType, path: string };

export type DocumentElementWriteSettingsAssociation = {
    declaration: DeclaredDocumentElementWriteSettings;
    providerValue: ProviderDocumentElementWriteSettings;
    clientValue: DocumentElement<any>;
}

export const isDocumentElementWriteSettingsDeclaration = (settings: Settings): settings is DeclaredDocumentElementWriteSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && settings.type === 'documentElementWrite';
};

export const isProviderDocumentElementWriteSettings = (settings: any): settings is ProviderDocumentElementWriteSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && 'type' in settings && settings.type === 'documentElementWrite';
};
