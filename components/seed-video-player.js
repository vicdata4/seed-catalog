import { LitElement, html, css } from 'lit-element';

export class SeedVideoPlayer extends LitElement {
  static get styles() {
    return [
      css`
        :host {
        }
      `
    ];
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
        <h1>Video player component</h1>
    `;
  }
}
