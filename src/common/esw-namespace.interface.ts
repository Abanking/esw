import { IVanillaJsEswDocumentApiV1 } from '../document-api';
import { IVanillaJsEswConnectorApiV1 } from '../connector-api';
import { IVanillaJsEswCatalogApiV1 } from '../catalog-api';

export interface IEswApi {
    v1: {
        documentApi?: IVanillaJsEswDocumentApiV1,
        connectorApi?: IVanillaJsEswConnectorApiV1,
        catalogApi?: IVanillaJsEswCatalogApiV1,
    }
}

export interface IEswNamespace {
    api: IEswApi;
}
