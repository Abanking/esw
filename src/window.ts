import { EswNamespace } from './common';
import { EswSettingsDeclaration } from './settings-api';

declare global {
    /**
     * Получение неймспейса
     */
    function getEswNamespace(): EswNamespace;

    /**
     * Функция, вызываемая платформой для получения инстанса виджета
     * @param config - конфиг, сформированный из настроек, выставленных провайдером
     * @return - инстанас виджета
     */
    function eswInit(config: any): unknown;

    /**
     * Функция, вызываемая платформой для получения настроек, требуемых виджету
     * @return - настройки виджета
     */
    function eswInitSettings(): EswSettingsDeclaration;
}
