import { ConnectorSettings } from './connectors.types';
import { CatalogSettings } from './catalogs.types';

export type Settings = ConnectorSettings | CatalogSettings;

export type GetSettingsReturn = { version: 'v1', settings: Settings[] };
