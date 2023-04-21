import {
  CatalogSettingsValue,
  EswAfterMount,
  EswEnv,
  GetSettingsReturn,
  IEswApi,
  EswOnSettingsChange,
} from "@ermolaev/esw";

type WidgetSettings = {
  weatherConnector: CatalogSettingsValue;
};

window.init = (env: EswEnv, config: WidgetSettings) => {
  return new SimpleWidget(config);
};

window.initSettings = (): GetSettingsReturn => {
  return {
    version: "v1",
    settings: [
      {
        type: "catalog",
        label: "Каталоги",
        saveTo: "weatherConnector",
      },
    ],
  };
};

class SimpleWidget implements EswAfterMount, EswOnSettingsChange {
  private readonly api: IEswApi = getEswNamespace().api;

  private root: HTMLElement | null = null;

  constructor(private config: WidgetSettings) {}

  public eswAfterMount(root: HTMLElement): void {
    this.root = root;
    root.innerHTML = "Hello, world!";
    this.updateView();
    this.api.v1.documentApi.
  }

  public updateView() {
    const root: HTMLElement | null = this.root;
    if (root && this.config.weatherConnector) {
      this.api.v1.catalogApi
        ?.read(this.config.weatherConnector)
        .then((data) => (root.innerHTML = JSON.stringify(data)))
        .catch(() => (root.innerHTML = "Извините, произошла ошибка"));
    }
  }

  public eswOnSettingsChange(config: WidgetSettings) {
    this.config = config;
    this.updateView();
  }
}
