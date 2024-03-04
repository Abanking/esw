/**
 * Программное представление операции
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Operation {
    /**
     * Выполнить операцию
     */
    exec: () => Promise<void>;
}
