import { RenderingPlatform } from './rendering-platform.type';

export type EswProviderEnv = {
    isProvider: true;
}

export type EswClientEnv = {
    isProvider: false;
    documentId: string;
    isAuth: boolean;
    platform: RenderingPlatform;
}

export type EswEnv = EswClientEnv | EswProviderEnv;
