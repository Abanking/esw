import { Catalog, EswOnSettingsChange, EswSettingsDeclaration } from "@artsofte/esw";

interface IWidgetSettings {
  catalog: Catalog<{ name: string; value: string }>;
}

window.eswInit = (config: IWidgetSettings) => {
  return new CatalogReader(config);
};

window.eswInitSettings = (): EswSettingsDeclaration => {
  return {
    version: "v1",
    settings: [
      {
        type: "catalog",
        label: "Отображаемый каталог",
        saveTo: "catalog",
      },
    ],
  };
};

class CatalogReader implements EswOnSettingsChange {
  private readonly renderRoot: HTMLElement = getEswNamespace().renderRoot;

  constructor(private config: IWidgetSettings) {}

  public eswOnSettingsChange(config: IWidgetSettings): void {
    this.config = config;
    this.renderCatalogData();
  }

  private renderCatalogData(): void {
    this.config.catalog.content().then((data) => {
      this.renderRoot.innerText = JSON.stringify(data);
    });
  }
}
