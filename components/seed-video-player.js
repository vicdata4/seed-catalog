import { LitElement, html, css } from 'lit-element';

export class SeedVideoPlayer extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
        }

        video {
          width: 100%;
        }

        .controls {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 50px;
          background-color: #0000ff52;
        }
      `
    ];
  }

  static get properties() {
    return {
      src: { type: String }
    };
  }

  constructor() {
    super();

    this.src = '';
  }

  firstUpdated() {
  }

  getVideoType() {
    return this.src.match(new RegExp('[^.]+$'));
  }

  render() {
    return html`
      <video controls>
        <source src="${this.src}" type="video/${this.getVideoType()}">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div class="controls"></div>
    `;
  }
}
