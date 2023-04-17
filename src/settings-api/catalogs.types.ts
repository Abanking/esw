import { Settings } from './main';

export type CatalogSettings = {
    type: 'catalog',
    label: string;
    saveTo: string;
    isRequired?: boolean;
}

export type CatalogSettingsValue = { name: string, id: string };

export type CatalogAssociationSettingsAndValue = {
    settings: CatalogSettings;
    value: CatalogSettingsValue;
}

export const isCatalogSettings = (settings: Settings): settings is CatalogAssociationSettingsAndValue['settings'] => {
    return settings.type === 'catalog';
};

