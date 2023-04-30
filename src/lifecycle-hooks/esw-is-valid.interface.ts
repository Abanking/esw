/**
 * Хук, вызывающийся при попытке пользователя перейти на следующий шаг
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface EswIsValid {
    eswIsValid: () => boolean;
}
