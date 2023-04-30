import { DocumentJsonData } from '../common';

/**
 * Программное представление элемента модели документа
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DocumentElement<T> {
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
    /**
     * Чтение данных относительно элемента модели документа
     * @param {string} path - путь, по которому происходит чтение. Если ничего не передается, то возвращается весь объект
     * @throws {InternalError} - внутренняя ошибка платформы
     */
    read: (path?: string) => Promise<T | null>;
}
