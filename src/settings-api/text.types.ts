import { Settings } from './main';

export type TextSettingsType = 'text';

export type DeclaredTextSettings = {
    type: TextSettingsType,
    label: string,
    saveTo: string,
    isRequired?: boolean,
}

export type ProviderTextSettings = string;

export type TextSettingsAssociation = {
    declaration: DeclaredTextSettings;
    providerValue: ProviderTextSettings;
    clientValue: string;
}

export const isTextSettingsDeclaration = (settings: Settings): settings is DeclaredTextSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && 'type' in settings && settings.type === 'text';
};
