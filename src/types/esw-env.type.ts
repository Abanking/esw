import { RenderingPlatform } from './rendering-platform.type';

/**
 * При рендеринге в приложении провайдера
 */
export type EswProviderEnv = {
    isProvider: true;
};

/**
 * При рендеринге в клиентском приложении
 */
export type EswClientEnv = {
    isProvider: false;
    /** Айди документа пользователя */
    documentId: string;
    // /** Авторизованный ли пользователь */
    // isAuth: boolean;
    /** Платформа на которой происходит рендеринг */
    platform: RenderingPlatform;
};

export type EswEnv = EswClientEnv | EswProviderEnv;
