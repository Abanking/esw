import { EswEnv } from '../types';
import { EswApi } from './esw-api.type';

export interface IEswNamespace {
    api: EswApi;
    env: EswEnv;
}
