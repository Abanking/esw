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
    /** Находится ли пользователь в неавторизованной зоне */
    isAnonymous: boolean;
    /** Платформа на которой происходит рендеринг */
    platform: RenderingPlatform;
};

export type EswEnv = EswClientEnv | EswProviderEnv;
