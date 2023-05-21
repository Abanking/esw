import { EswEnv } from '../types';
import { EswApi } from './esw-api.type';

/**
 * Объект, предоставляющий набор методов/данных для использования в глобальном контексте виджета
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface EswNamespace {
    /**
     * API предоставляемый платформой
     */
    api: EswApi;
    /**
     * Переменные окружения для понимания контекста, в котором происходит рендеринг виджета
     */
    env: EswEnv;
    /**
     * Ссылка на HTML элемент в котором происходит рендеринг виджета
     */
    renderRoot: HTMLElement;
    /**
     * Получение конфига
     */
    config: <T>() => T;
}
