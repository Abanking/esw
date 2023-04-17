import { CatalogSettingsValue, EswAfterMount, EswEnv, GetSettingsReturn, IEswApi } from "@ermolaev/esw";

interface WidgetConfig {
  catalogData: CatalogSettingsValue;
}

window.init = (env: EswEnv, config: any) => {
  return new Widget(env, config);
}

window.initSettings = (): GetSettingsReturn => {
  return {
    version: "v1",
    settings: [
      {
        type: "catalog",
        label: "Каталог, который нужно отобразить",
        saveTo: "catalogData",
      },
    ],
  };
}

class Widget implements EswAfterMount {
  private readonly api: IEswApi = getEswNamespace().api;

  private root!: HTMLElement;

  constructor(
    private readonly env: EswEnv,
    private readonly config: WidgetConfig,
  ) {
  }

  public eswAfterMount(root: HTMLElement): void {
    this.root = root;

    if (this.env.isProvider) {
      this.renderProviderView();
      return;
    }

    if (this.api.v1.catalogApi) {
      this.api.v1.catalogApi.read<{ name: string, value: string }[]>(this.config.catalogData)
        .then((data: { name: string, value: string }[]) => this.renderCatalog(data))
        .catch(() => this.renderError())
    }
  }

  private renderProviderView() {
    this.root.innerHTML = '<div>Виджет показывает содержимое каталога</div>'
  }

  private renderCatalog(data: { name: string, value: string }[]) {
    let resultHtml = '';

    data.forEach((obj) => {
      resultHtml += `<div>${obj.name} = ${obj.value}</div>`
    })

    this.root.innerHTML = resultHtml;
  }

  private renderError() {
    this.root.innerHTML = 'Ошибка при загрузке справочника';
  }
}