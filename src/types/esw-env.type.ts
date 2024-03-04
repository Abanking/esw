import { RenderingPlatform } from './rendering-platform.type';

/**
 * При рендеринге в приложении провайдера
 */
export type EswProviderEnv = {
    isProvider: true;
    /**
     * Регистрация коллбека, который будет вызван при клике мимо виджета
     * @param cb
     */
    onOutsideWidgetClickCb: (cb: () => void) => void;
};

/**
 * При рендеринге в клиентском приложении
 */
export type EswClientEnv = {
    isProvider: false;
    /** Айди документа пользователя */
    documentId: string;
    /** Айди степа, на котором находится заявка сейчас */
    stepId: string;
    /** Находится ли пользователь в неавторизованной зоне */
    isAnonymous: boolean;
    /** Платформа на которой происходит рендеринг */
    platform: RenderingPlatform;
    /**
     * Регистрация коллбека, который будет вызван при клике мимо виджета
     * @param cb
     */
    onOutsideWidgetClickCb: (cb: () => void) => void;
};

export type EswEnv = EswClientEnv | EswProviderEnv;
