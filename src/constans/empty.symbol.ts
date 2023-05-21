/**
 * Константа обозначающая, отсутствие каких-либо данных.
 * Например, при чтении данных из модели документа по определенному пути (path), если такого пути не существует - вернется Empty.
 * Константа нужна, чтобы различать случаи, когда по пути (path) лежит null, а когда такого пути в объекте в принципе не существует
 * Для сравнения данных с данной константой используйте isEmpty функцию
 */
// TODO: переименовать в EmptyValue и создать тип Empty
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EmptyValue: unique symbol = Symbol.for('ESW_EMPTY_DATA_DOCUMENT_ELEMENT');
export type Empty = typeof EmptyValue;
