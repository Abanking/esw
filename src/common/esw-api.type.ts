import { IVanillaJsEswCatalogApiV1 } from '../catalog-api';

export type EswApiOnForm = {
    v1: {
        // documentApi: IVanillaJsEswDocumentApiV1,
        catalogApi: IVanillaJsEswCatalogApiV1,
    }
}

export type EswApiWithoutForm  = {
    v1: {
        catalogApi: IVanillaJsEswCatalogApiV1,
    }
}

export type EswApi = EswApiOnForm | EswApiWithoutForm;
