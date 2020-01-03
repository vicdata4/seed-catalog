import { LitElement, html, css } from 'lit-element';
import { spinner } from './utils/svg-icons';
import { seedStyle } from '../styles';

/** */
export class SeedSpinner extends LitElement {
  static get styles() {
    return [
      seedStyle,
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
    this.color = this.color || '#fff';
    this.background = this.background || 'rgba(0, 0, 0, 0.4)';
  }

  firstUpdated() {
    this.shadowRoot.querySelector('svg').style.stroke = this.color;
    this.style.backgroundColor = this.background;
  }

  render() {
    return html`${spinner}`;
  }
}
