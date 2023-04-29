/**
 * Программное представление справочника
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Catalog<T> {
    content: () => Promise<T>;
}
