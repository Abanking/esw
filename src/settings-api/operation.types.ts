import { Settings } from './main';
import { Operation } from '../operation-api';

export type OperationSettingsType = 'operation';

export type DeclaredOperationSettings = {
    type: OperationSettingsType;
    label: string;
    saveTo: string;
    isRequired?: boolean;
}

export type ProviderOperationSettings = {
    type: OperationSettingsType;
    operationId: string;
}

export type OperationSettingsAssociation = {
    declaration: DeclaredOperationSettings,
    providerValue: ProviderOperationSettings,
    clientValue: Operation;
}

export const isOperationSettingsDeclaration = (settings: Settings): settings is DeclaredOperationSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && settings.type === 'operation';
};

export const isProviderOperationSettings = (settings: any): settings is ProviderOperationSettings => {
    if (typeof settings !== 'object') {
        return false;
    }

    return settings && 'type' in settings && settings.type === 'operation';
};
