/**
 * Программное представление справочника
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Catalog<CatalogItem extends { value: string, name: string }> {
    /**
     * Получение данных справочника
     * @return Promise<CatalogData> - данные справочника
     * @throws {CallingInWrongEnvError} - если в контексте виджета нет catalog api
     * @throws {InternalError} - внутренняя ошибка платформы
     */
    content: () => Promise<CatalogItem[]>;
}
