/**
 * Хук, вызывающийся после удаления виджета из DOM
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface EswAfterUnmount {
    eswAfterUnmount: () => void;
}
