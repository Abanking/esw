import { DocumentJsonData } from '../common';

export interface IVanillaJsEswDocumentApiV1 {
    /**
     * Данный метод вернет данные относительно того объекта, что разрешил читать провайдер
     * Если же права на чтение у виджета нет - вернется ошибка
     *
     * @return {DocumentJsonData} объект с данными, сформированные относительно того пути, который разрешил провайдер
     * @throws {ReadDocumentAccessError} провайдер не позволил читать данные из модели документа
     */
    documentContent: <T>(path?: string) => Promise<T | null>;

    /**
     *
     * @param relativePath - относительн
     * @param jsonData
     */
    patchDocumentContentByPath: (relativePath: string, jsonData: DocumentJsonData) => Promise<boolean>;

    // uploadFile: (file: File) => Promise<UUID>;

    // documentDataByPath: <T>(documentId: UUID, path: string) => Promise<T>;
}
