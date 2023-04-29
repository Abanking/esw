import {} from "@ermolaev/esw";

window.init = () => {
  return new SimpleWidget();
};

class SimpleWidget {
  constructor() {
    const renderRoot: HTMLElement = getEswNamespace().renderRoot;
    renderRoot.innerText = "Hello, NoCode!";
  }
}
