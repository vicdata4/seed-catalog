import { LitElement, html, css } from 'lit-element';

import {
  videoSpinner,
  videoPlayPreview,
  videoPlayBtn,
  videoFullScreen,
  videoVolumeUp
} from './utils/svg-icons';

export class SeedVideoPlayer extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --control-container-height: 50px;
          --progress-bar-height: 3px;
        }

        .video-container {
          position: relative;
          background-color: rgba(0,0,0,.5);
          display: grid;
        }

        video {
          width: 100%;
          height: auto;
        }

        video > source {
          background-color: green;
        }

        .controls {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: var(--control-container-height);
          background-color: rgba(0,0,0,0.5);
          background-image: linear-gradient(to top, rgba(0,0,0,.8) , rgba(0,0,0,.1));
        }

        .video-spinner {
          position: absolute;
          display: block;
          align-self: center;
          margin-top: calc((var(--control-container-height) / 2) * -1);
        }

        .btn-play-preview {
          display: none;
          position: absolute;
          align-self: center;
          justify-self: center;
          border-radius: 100%;
          background-color: rgba(0,0,0,.5);
          margin-top: calc((var(--control-container-height) / 2) * -1);
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
        }

        .btn-play, .btn-volume {
          display: flex;
          background: none;
          border: none;
          padding: 0 3px;

          outline: none;
          cursor: pointer;
        }

        .video-buttons {
          display: flex;
          flex-flow: row nowrap;
        }


        .progress-bar-container {
          width: 100%;
          height: var(--progress-bar-height);
          background-color: rgba(255,255,255,.3);
        }

        .progress-bar {
          position: absolute;
          width: 0%;
          height: var(--progress-bar-height);
          background-color: red !important;
          transition: width .2s;
        }

        .progress-bar-buffer {
          width: 0%;
          height: var(--progress-bar-height);
          background-color: rgba(255,255,255,.4);
          transition: width .2s;
        }

        .controls-case {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0 10px;
          width: auto;
          height: inherit;
        }

        .input-volume {
          width: 80px;
        }

        svg polyline, svg line, svg path {
          -webkit-transition: 0.5s;
          transition: 0.5s;
        }
      `
    ];
  }

  static get properties() {
    return {
      src: { type: String },
      isLoadedData: { type: Boolean },
      duration: { type: Number },
      volumeValue: { type: Number },
      volumePercent: { type: Number }
    };
  }

  constructor() {
    super();

    this.src = '';
    this.duration = 0;
    this.volumePercent = 0.5;
    this.volumeValue = 50;
    this.isLoading = true;
  }

  firstUpdated() {
    const video = this.shadowRoot.querySelector('video');
    const spinner = this.shadowRoot.querySelector('.video-spinner');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');
    const progressBar = this.shadowRoot.querySelector('.progress-bar');
    const bufferBar = this.shadowRoot.querySelector('.progress-bar-buffer');
    const volumeInput = this.shadowRoot.querySelector('.input-volume');

    video.addEventListener('loadeddata', event => {
      this.duration = event.target.duration;
      this.isLoadedData = false;

      spinner.style.display = 'none';
      playPreview.style.display = 'block';
    });

    video.addEventListener('timeupdate', () => {
      const buffer = (video.buffered.end(0) / this.duration) * 100;
      const percent = (video.currentTime * 100) / this.duration;

      progressBar.style.width = `${percent}%`;
      bufferBar.style.width = `${buffer}%`;
    });

    volumeInput.addEventListener('input', e => {
      const percent = e.target.value * 0.01;
      video.volume = percent;
      this.volumePercent = percent;
      this.volumeValue = e.target.value;
    });
  }

  switchVolume() {
    const video = this.shadowRoot.querySelector('video');
    const volume = this.shadowRoot.querySelector('.input-volume');

    if (video.volume > 0) {
      video.volume = 0;
      volume.value = 0;
    } else {
      video.volume = this.volumePercent;
      volume.value = this.volumeValue;
    }
  }

  switchVideo() {
    const video = this.shadowRoot.querySelector('video');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');

    if (!this.isLoadedData) {
      if (video.paused) {
        video.play();
        playPreview.style.display = 'none';
        this.shadowRoot.querySelector('.play-path').setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z');
      } else {
        video.pause();
        playPreview.style.display = 'block';
        this.shadowRoot.querySelector('.play-path').setAttribute('d', 'M8 5v14l11-7z');
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
        <div class="controls">
          <div class="progress-bar-container">
            <div class="progress-bar-buffer">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="controls-case">
            <div class="video-buttons">
              <button class="btn-play" @click="${this.switchVideo}">${videoPlayBtn}</button>
              <button class="btn-volume" @click="${this.switchVolume}">${videoVolumeUp}</button>
              <input class="input-volume" type="range" min="0" max="100" step="1" value="50">
            </div>
            <div>
              <button class="btn-play">${videoFullScreen}</button>
            </div>
          </div>
        </div>
        <button class="btn-play-preview" @click="${this.switchVideo}">${videoPlayPreview}</button>
        ${videoSpinner}
      </div>
    `;
  }
}
