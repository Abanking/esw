import { CatalogAssociationSettingsAndValue } from '../settings-api';

export interface IVanillaJsEswCatalogApiV1 {
    read: <CatalogData>(catalog: CatalogAssociationSettingsAndValue['value']) => Promise<CatalogData>;
}
