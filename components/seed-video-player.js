import { LitElement, html, css } from 'lit-element';

import { videoSpinner, videPlayPreview } from './utils/svg-icons';

export class SeedVideoPlayer extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --controls-height: 50px;
        }

        .video-container {
          position: relative;
          background-color: red;
          display: grid;
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
          height: var(--controls-height);
          background-color: rgba(0,0,0,0.5);
        }

        .video-spinner {
          position: absolute;
          display: block;
          align-self: center;
          margin-top: calc((var(--controls-height) / 2) * -1);
        }

        .btn-play-preview {
          display: none;
          position: absolute;
          align-self: center;
          justify-self: center;
          border-radius: 100%;
          background-color: rgba(0,0,0,.5);
          margin-top: calc((var(--controls-height) / 2) * -1);
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
        }
      `
    ];
  }

  static get properties() {
    return {
      src: { type: String },
      isLoadedData: { type: Boolean }
    };
  }

  constructor() {
    super();

    this.src = '';
    this.isLoading = true;
  }

  firstUpdated() {
    const video = this.shadowRoot.querySelector('video');
    const spinner = this.shadowRoot.querySelector('.video-spinner');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');

    video.addEventListener('loadeddata', event => {
      // console.log('Yay! The readyState just increased to HAVE_CURRENT_DATA or greater for the first time.');
      this.isLoadedData = false;
      spinner.style.display = 'none';
      playPreview.style.display = 'block';
    });
  }

  switchVideo() {
    const video = this.shadowRoot.querySelector('video');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');

    if (!this.isLoadedData) {
      if (video.paused) {
        video.play();
        playPreview.style.display = 'none';
      } else {
        video.pause();
        playPreview.style.display = 'block';
      }
    }
  }

  getVideoType() {
    return this.src.match(new RegExp('[^.]+$'));
  }

  render() {
    return html`
      <div class="video-container">
        <video @click="${this.switchVideo}">
          <source src="${this.src}" type="video/${this.getVideoType()}">
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="controls"></div>
        <button class="btn-play-preview" @click="${this.switchVideo}">${videPlayPreview}</button>
        ${videoSpinner}
      </div>
    `;
  }
}
