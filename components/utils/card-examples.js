import { LitElement, html } from 'lit-element';

class CardExamples extends LitElement {
  static get properties() {
    return {
      width: { type: Number },
      height: { type: Number }
    };
  }

  constructor() {
    super();
    this.width = 328;
    this.height = 530;
  }

  render() {
    return html`
      <div class="card" .style="width: ${this.width}px; height: ${this.height}px;"></div>
    `;
  }
}

window.customElements.define('card-examples', CardExamples);
