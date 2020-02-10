import { LitElement, html, css } from 'lit-element';

class CardExamples extends LitElement {
  static get styles() {
    return [
      css`
        .card {
          width: 328px;
          height: 530px;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="card"></div>
    `;
  }
}

window.customElements.define('card-examples', CardExamples);
