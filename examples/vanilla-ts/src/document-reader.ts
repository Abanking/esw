import { ReadonlyDocumentElement } from "@artsofte/esw";

interface IWidgetSettings {
  rootElement: ReadonlyDocumentElement<{}>;
}

window.eswInit = (config: IWidgetSettings) => {
  return new DocumnetReader(config);
};

window.eswInitSettings = () => {
  return {
    version: "v1",
    settings: [
      {
        type: "documentRootRead",
        saveTo: "rootElement",
      },
    ],
  };
};

class DocumnetReader {
  constructor(private readonly config: IWidgetSettings) {
    if (getEswNamespace().env.isProvider) {
      return;
    }

    config.rootElement
      .read()
      .then((data: any) => {
        getEswNamespace().renderRoot.innerText = data;
      })
      .catch(() => {
        getEswNamespace().renderRoot.innerText = "Что то пошло не так";
      });
  }
}
