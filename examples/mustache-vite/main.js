import Mustache from 'mustache';

const htmlTemplate = `
<html>
    <body>
        Hello {{ name }}!
    </body>
</html>
`;

window.eswInit = () => new Widget();

class Widget {
    renderRoot = getEswNamespace().renderRoot;

    constructor() {
        const result = Mustache.render(htmlTemplate, { name: 'ESW' });
        this.renderRoot.innerHTML = result;
    }
}