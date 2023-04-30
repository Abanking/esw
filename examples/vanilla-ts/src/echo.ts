import {
  EswAfterUnmount,
  EswApi,
  EswIsValid,
  EswOnSettingsChange,
} from "@ermolaev/esw";

window.eswInit = (config: any) => {
  console.log("Echo::init");
  console.log("Echo::init-config " + JSON.stringify(config ?? {}));
  return new SimpleWidget();
};

class SimpleWidget implements EswAfterUnmount, EswOnSettingsChange, EswIsValid {
  private readonly api: EswApi = getEswNamespace().api;

  private readonly root: HTMLElement = getEswNamespace().renderRoot;

  constructor() {
    console.log("Echo::constructor");
    console.log("Echo::api");
    console.log(this.api);
    console.log("Echo::root");
    console.log(this.root);
    console.log("Echo::getEswNamespace");
    console.log(getEswNamespace());
  }

  public eswAfterUnmount(): void {
    console.log("Echo::eswAfterUnmount");
  }

  public eswOnSettingsChange(): void {
    console.log("Echo::eswOnSettingsChange");
  }

  public eswIsValid(): boolean {
    console.log("Echo::eswIsValid");

    return false;
  }
}
