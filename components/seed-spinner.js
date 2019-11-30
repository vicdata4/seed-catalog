import { LitElement, html, css } from 'lit-element';
import { spinner } from './utils/svg-icons';

/** */
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
          background-color: rgba(0,0,0,.2);
        }  
      `
    ];
  }

  render() {
    return html`
        ${spinner}
    `;
  }
}
