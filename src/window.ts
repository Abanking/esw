import { IEswNamespace } from './common';
import { GetSettingsReturn } from './settings-api';

declare global {
    function getEswNamespace(doc?: Document): IEswNamespace;
    function init(config: any): unknown;
    function initSettings(): GetSettingsReturn;
    function getRenderRoot(): HTMLElement;
}
