export interface IEswCatalogApiBridge {
    /**
     * Получение данных каталога
     * @param {string} catalogId - айди каталога
     * @throws {InternalError} - ошибка при взаимодействии со справочниками на стороне платформы
     */
    content: <CatalogItem extends { value: string, name: string }>(catalogId: string) => Promise<CatalogItem[]>;
}
