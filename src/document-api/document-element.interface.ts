import { DocumentJsonData } from '../common';
import { ReadonlyDocumentElement } from './readonly-document-element.interface';

/**
 * Программное представление элемента модели документа
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DocumentElement<T> extends ReadonlyDocumentElement<T> {
    /**
     * Патч данных относительно элемента модели документа
     * @param {DocumentJsonData} value - данные, которые хотим запатчить
     * @return {Promise<boolean>} - успешность патчинга
     * @throws {InternalError} - внутренняя ошибка платформы
     */
    patch: (value: DocumentJsonData) => Promise<boolean>;
    /**
     * Патч данных относительно элемента модели документа по определенному пути
     * @param {string} path - путь вида a, a.b, a.b.c
     * @param {DocumentJsonData} value - данные, которые хотим запатчить
     * @return {Promise<boolean>} - успешность патчинга
     * @throws {InternalError} - внутренняя ошибка платформы
     */
    patchByPath: (path: string, value: DocumentJsonData) => Promise<boolean>;
}
