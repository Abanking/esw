import { ConnectorAssociationSettingsAndValue } from '../settings-api';

export interface IVanillaJsEswConnectorApiV1 {
    exec:(connector:  ConnectorAssociationSettingsAndValue['value']) => Promise<any>;
}
