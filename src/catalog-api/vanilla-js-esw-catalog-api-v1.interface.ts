import { ProviderCatalogSetting } from '../settings-api';

export interface IVanillaJsEswCatalogApiV1 {
    content: <CatalogData>(catalog: ProviderCatalogSetting) => Promise<CatalogData>;
}
