import { InitWidget } from './init-function.type';
import { InitSettings } from './init-settings-function.type';
import { EswNamespace } from '../common';

export type ChildWindow = Window & {
    /**
     * Метод, возвращающий инстанс виджета. Вызывается, когда платформа готова рендерить виджет
     */
    eswInit: InitWidget,
    /**
     * Метод, декларирующий требуемые настройки. Выводятся в правом сайдбаре в интерфейсе провайдера
     */
    eswInitSettings?: InitSettings,
    /**
     * Получение namespace
     */
    getEswNamespace: () => EswNamespace,
}
