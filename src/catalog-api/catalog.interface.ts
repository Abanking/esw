/**
 * Программное представление справочника
 */
export interface Catalog<T> {
  content: () => Promise<T>;
}
