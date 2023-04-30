import { EswInstance } from '../common';
import { EswIsValid } from './esw-is-valid.interface';
import { EswAfterUnmount } from './esw-after-unmount.interface';
import { EswOnSettingsChange } from './esw-on-settings-change.interface';

/**
 * Реализует ли виджет интерфейс EswIsValid
 * @param {EswInstance} instance - инстанс виджета
 * @return {boolean}
 */
export const isImplEswIsValid = (instance: EswInstance): instance is EswIsValid => {
    return 'eswIsValid' in instance;
};

/**
 * Реализует ли виджет интерфейс EswAfterUnmount
 * @param {EswInstance} instance - инстанс виджета
 * @return {boolean}
 */
export const isImplEswAfterUnmount = (instance: EswInstance): instance is EswAfterUnmount => {
    return 'eswAfterUnmount' in instance;
};

/**
 * Реализует ли виджет интерфейс EswOnSettingsChange
 * @param {EswInstance} instance - инстанс виджета
 * @return {boolean}
 */
export const isImplEswOnSettingsChange = (instance: EswInstance): instance is EswOnSettingsChange => {
    return 'eswOnSettingsChange' in instance;
};
