import { InitWidget } from './init-function.type';
import { InitSettings } from './init-settings-function.type';
import { IEswNamespace } from '../common';

export type ChildWindow = Window & {
    init: InitWidget,
    initSettings?: InitSettings,
    getEswNamespace: (doc?: Document) => IEswNamespace,
    renderElementRef: HTMLDivElement,
}
