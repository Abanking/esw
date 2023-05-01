import { DocumentJsonData } from '../common';
import { Empty } from '../constans';

export interface IVanillaJsEswReadonlyDocumentApiV1 {
    /**
     * Данный метод полную модель документа
     *
     * @param {string} - путь
     * @return {DocumentJsonData} объект с данными
     */
    documentContent: <T>(path?: string) => Promise<T | Empty>;

}

export interface IVanillaJsEswDocumentApiV1 {
    /**
     * Данный метод вернет данные относительно того объекта, что разрешил читать провайдер
     * Если же права на чтение у виджета нет - вернется ошибка
     *
     * @return {DocumentJsonData} объект с данными, сформированные относительно того пути, который разрешил провайдер
     */
    documentContent: <T>(path?: string) => Promise<T | Empty>;

    /**
     *
     * @param relativePath - относительн
     * @param jsonData
     */
    patchDocumentContentByPath: (relativePath: string, jsonData: DocumentJsonData) => Promise<boolean>;
}
