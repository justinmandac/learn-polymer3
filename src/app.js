import { PolymerElement, html } from '@polymer/polymer';

class MyElement extends PolymerElement {
  static get is() { return 'my-element'; }
  static get template() {
    return html`
      Webcomponents are aight.
    `;
  }
}

customElements.define(MyElement.is, MyElement);