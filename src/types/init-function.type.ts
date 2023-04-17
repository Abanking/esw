import { EswEnv } from './esw-env.type';
import { IEswInstance } from '../common';

export type InitWidget = (env: EswEnv, config: Record<string | number | symbol, unknown>) => IEswInstance;
