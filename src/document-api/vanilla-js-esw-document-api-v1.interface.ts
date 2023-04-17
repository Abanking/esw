import { IDocumentContent } from './document-content.interface';
import { DocumentJsonData, UUID } from '../common';

export interface IVanillaJsEswDocumentApiV1 {
    documentContent: () => Promise<IDocumentContent>;

    patchDocumentContent: (jsonData: DocumentJsonData) => Promise<boolean>;

    uploadFile: (file: File) => Promise<UUID>;

    documentDataByPath: <T>(documentId: UUID, path: string) => Promise<T>;
}
