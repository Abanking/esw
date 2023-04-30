/**
 * Хук, вызывающийся при изменении каких-либо настроек со стороны провайдера.
 * Вызывается только при рендеринга на стороне провайдера
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface EswOnSettingsChange {
    eswOnSettingsChange: (config: any) => void;
}
