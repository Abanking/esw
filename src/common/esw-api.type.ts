import { IEswCatalogApiBridge } from '../catalog-api';

export type EswApiOnForm = {
    v1: {
        // documentApi: IVanillaJsEswDocumentApiV1,
        catalogApi: IEswCatalogApiBridge,
    }
}

export type EswApiWithoutForm  = {
    v1: {
        catalogApi: IEswCatalogApiBridge,
    }
}

export type EswApi = EswApiOnForm | EswApiWithoutForm;
