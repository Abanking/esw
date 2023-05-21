import { Settings } from './main';

export type SelectSettingsType = 'select';

export type SelectItem = { value: string, name: string };

export type DeclaredSelectSettings<Item extends SelectItem> = {
    type: SelectSettingsType,
    label: string,
    saveTo: string,
    isRequired?: boolean,
    items: Item[],
}

export type ProviderSelectSettings<Item extends SelectItem> = { type: SelectSettingsType, selectedValue: Item | null };

export type SelectSettingsAssociation<Item extends SelectItem> = {
    declaration: DeclaredSelectSettings<Item>;
    providerValue: ProviderSelectSettings<Item>;
    clientValue: SelectItem;
}

export const isSelectSettingsDeclaration = <Item extends SelectItem>(settings: Settings): settings is DeclaredSelectSettings<Item> => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && settings.type === 'select';
};

export const isProviderSelectSettings = (settings: any): settings is ProviderSelectSettings<any> => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && settings.type === 'select';
};
