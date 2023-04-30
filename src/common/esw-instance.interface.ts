import { EswAfterUnmount, EswIsValid, EswOnSettingsChange } from '../lifecycle-hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface EswInstance extends Partial<EswAfterUnmount>, Partial<EswIsValid>, Partial<EswOnSettingsChange> {}
