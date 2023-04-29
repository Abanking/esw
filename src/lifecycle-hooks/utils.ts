import { IEswInstance } from '../common';
import { EswIsValid } from './esw-is-valid.interface';
import { EswAfterUnmount } from './esw-after-unmount.interface';
import { EswOnSettingsChange } from './esw-on-settings-change.interface';

export const isImplEswIsValid = (instance: IEswInstance): instance is EswIsValid => {
    return 'eswIsValid' in instance;
};

export const isImplEswAfterUnmount = (instance: IEswInstance): instance is EswAfterUnmount => {
    return 'eswAfterUnmount' in instance;
};

export const isImplEswOnSettingsChange = (instance: IEswInstance): instance is EswOnSettingsChange => {
    return 'eswOnSettingsChange' in instance;
};
