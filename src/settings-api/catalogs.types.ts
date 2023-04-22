import { Settings } from './main';
import { Catalog } from '../catalog-api';

export type CatalogSettingsType = 'catalog';

/**
 * Виджет может объявить, что ему требуется коннектор.
 * Привязывает этот коннектор провайдер
 */
export type DeclaredCatalogSettings = {
    type: CatalogSettingsType,
    label: string;
    saveTo: string;
    isRequired?: boolean;
}

/**
 * Когда провайдер изменяет настройку в UI, в настройки записывается данный интерфейс
 */
export type ProviderCatalogSetting = { type: CatalogSettingsType, name: string, id: string };

export type CatalogSettingsAssociation = {
    declaration: DeclaredCatalogSettings;
    providerValue: ProviderCatalogSetting;
    clientValue: Catalog<any>;
}

export const isCatalogSettingsDeclaration = (settings: Settings): settings is DeclaredCatalogSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && settings.type === 'catalog';
};

export const isProviderCatalogSettings = (settings: any): settings is ProviderCatalogSetting => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && 'type' in settings && settings.type === 'catalog';
};
