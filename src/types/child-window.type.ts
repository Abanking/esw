import { InitWidget } from './init-function.type';
import { InitSettings } from './init-settings-function.type';
import { EswNamespace } from '../common';

export type ChildWindow = Window & {
    eswInit: InitWidget,
    eswInitSettings?: InitSettings,
    getEswNamespace: () => EswNamespace,
}
