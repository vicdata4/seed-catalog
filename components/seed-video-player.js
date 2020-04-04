import { LitElement, html, css } from 'lit-element';

export class SeedVideoPlayer extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          position: relative;
          background-color: red;
        }

        video {
          width: 100%;
        }

        video > source {
          background-color: green;
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

  switchVideo() {
    const video = this.shadowRoot.querySelector('video');

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  getVideoType() {
    return this.src.match(new RegExp('[^.]+$'));
  }

  render() {
    return html`
      <video @click="${this.switchVideo}">
        <source src="${this.src}" type="video/${this.getVideoType()}">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div class="controls"></div>
    `;
  }
}
