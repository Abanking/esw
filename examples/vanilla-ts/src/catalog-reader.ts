import { Catalog, GetSettingsReturn } from "@ermolaev/esw";

interface IWidgetSettings {
  catalog: Catalog<{ name: string; value: string }[]>;
}

window.init = (config: IWidgetSettings) => {
  return new CatalogReader(config);
};

window.initSettings = (): GetSettingsReturn => {
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

class CatalogReader {
  private readonly renderRoot: HTMLElement = getEswNamespace().renderRoot;

  constructor(config: IWidgetSettings) {
    const isProvider = getEswNamespace().env.isProvider;

    if (isProvider) {
      this.renderProviderView();
    } else {
      config.catalog
        .content()
        .then((data) => this.render(data))
        .catch(() => this.renderError());
    }
  }

  private renderProviderView(): void {
    this.renderRoot.innerHTML = "Отображение каталогов";
  }

  private render(data: any): void {
    this.renderRoot.innerHTML = JSON.stringify(data);
  }

  private renderError(): void {
    this.renderRoot.innerHTML = "Ошибка чтения справочника";
  }
}
