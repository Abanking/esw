import {
  DocumentElement,
  EswAfterUnmount,
  GetSettingsReturn,
} from "@ermolaev/esw";

window.init = (config: IWidgetSettings) => {
  return new SimpleWidget(config);
};

interface IWidgetSettings {
  documentToken: DocumentElement<{ someData: string }>;
}

window.initSettings = (): GetSettingsReturn => {
  return {
    version: "v1",
    settings: [
      {
        type: "documentElementWrite",
        label: "Запись в модель документа",
        saveTo: "documentToken",
        isRequired: true,
      },
    ],
  };
};

class SimpleWidget implements EswAfterUnmount {
  private readonly renderRoot: HTMLElement = getEswNamespace().renderRoot;

  private readonly intrevalId: number = 0;

  constructor(config: IWidgetSettings) {
    const isProvider = getEswNamespace().env.isProvider;

    if (isProvider) {
      this.renderProviderView();

      return;
    }

    let count = 0;

    this.intrevalId = setInterval(() => {
      count += 1;
      config.documentToken.patch({ count });
      this.renderRoot.innerHTML = `Count: ${count}`;
    }, 1000);
  }

  public eswAfterUnmount() {
    clearInterval(this.intrevalId);
  }

  private renderProviderView() {
    this.renderRoot.innerHTML = "Виджет патчит документ каждую секунду";
  }
}
