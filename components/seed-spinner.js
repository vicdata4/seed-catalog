import { LitElement, html, css } from 'lit-element';

export class SeedSpinner extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: 999;
          background-color: rgba(0,0,0,.4);
        }  
      `
    ];
  }

  static get properties() {
    return {
      color: { type: String },
      background: { type: String }
    };
  }

  constructor() {
    super();
    this.color = '#fff';
    this.background = 'rgba(0, 0, 0, 0.4)';
  }

  async firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot:not([name])');

    if (slot.assignedElements()[0].nodeName === 'svg') {
      this.shadowRoot.querySelector('slot:not([name])').assignedElements()[0].style.stroke = this.color;
    }
    this.style.backgroundColor = this.background;
  }

  render() {
    return html`<slot></slot>`;
  }
}
