import { IEswCatalogApiBridge } from '../catalog-api';
import { IEswOperationApiBridge } from '../operation-api';

export type EswApiOnForm = {
    v1: {
        // documentApi: IVanillaJsEswDocumentApiV1,
        catalogApi: IEswCatalogApiBridge,
        operationApi: IEswOperationApiBridge,
    }
}

export type EswApiWithoutForm  = {
    v1: {
        catalogApi: IEswCatalogApiBridge,
        operationApi: IEswOperationApiBridge,
    }
}

export type EswApi = EswApiOnForm | EswApiWithoutForm;
