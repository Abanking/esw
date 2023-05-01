import { Empty } from '../constans';

/**
 * Программное представление элемента модели документа в качестве чтения
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ReadonlyDocumentElement<T> {
    /**
     * Чтение данных относительно элемента модели документа
     * @param {string} path - путь, по которому происходит чтение. Если ничего не передается, то возвращается весь объект
     * @return {Promise<T | Empty>} - значение либо константа Empty
     * @throws {InternalError} - внутренняя ошибка платформы
     */
    read: (path?: string) => Promise<T | Empty>;
}
