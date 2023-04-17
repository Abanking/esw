import { EswEnv } from './types';
import { IEswInstance, IEswNamespace } from './common';
import { GetSettingsReturn } from './settings-api';

declare global {
    function getEswNamespace(doc?: Document): IEswNamespace;
    function init<WConfig>(env: EswEnv, config: WConfig): IEswInstance
    function initSettings(): GetSettingsReturn
}
