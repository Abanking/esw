import { EswAfterUnmount, EswIsValid } from '../lifecycle-hooks';
import { EswOnSettingsChange } from '../lifecycle-hooks/esw-on-settings-change.interface';

export interface IEswInstance extends Partial<EswAfterUnmount>, Partial<EswIsValid>, Partial<EswOnSettingsChange> {
}
