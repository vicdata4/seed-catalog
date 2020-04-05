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
          --progress-bar-height: 5px;
        }

        ::-webkit-media-controls, video::-webkit-media-controls, video::-webkit-media-controls-enclosure {
          display: none !important;
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

        .controller {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: var(--control-container-height);
          background-color: rgba(0,0,0,0.5);
          background-image: linear-gradient(to top, rgba(0,0,0,.8) , rgba(0,0,0,.1));
          transition: opacity .8s;
          z-index: 2147483647;
        }

        .controller.hide {
          transition-delay: 1s;
          opacity: 0;
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
          align-items: center;
        }


        .progress-bar-container {
          position: absolute;
          bottom: var(--control-container-height);

          width: 100%;
          height: var(--progress-bar-height);

          background-color: rgba(255,255,255,.3);
          transition: opacity .8s;
          cursor: pointer;
        }

        .progress-bar-container.hide {
          transition-delay: 1s;
          opacity: 0;
        }

        .progress-bar {
          position: absolute;
          height: inherit;
          background-color: red !important;
          transition: width 2s;
        }

        .progress-bar-buffer {
          position: absolute;
          width: 0%;
          height: inherit;
          background-color: rgba(255,255,255,.7);
          transition: width .2s;
        }

        .progress-bar-pointer {
          display: none;
          position: absolute;
          right: 0;

          width: 3px;
          height: 3px;

          border-radius: 100%;
          background-color: rgba(0,0,0,.5);
          transition: all .2s;
        }

        .input-range-container {
          width: 0;
          overflow: hidden;
          transition: width 1s;
        }

        .input-range-container.opened, .input-range-container:hover {
          width: 100%;
        }

        .control-box {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0 10px;
          width: auto;
          height: inherit;
        }

        .input-range-volume {
          width: 80px;
          cursor: pointer;
        }

        .timer {
          display: flex;
          align-items: center;
          margin: 0 10px;
          font-size: 11px;
          letter-spacing: .6px;
          font-family: sans-serif;
          font-weight: 300;
          color: white;
        }

        .timer-separator {
          margin: 0 4px;
          font-size: 11px;
        }
      `
    ];
  }

  static get properties() {
    return {
      src: { type: String },
      isLoadedData: { type: Boolean },
      duration: { type: Number },
      videoVolume: { type: Number },
      videoVolumeInput: { type: Number },
      videoCurrentTime: { type: Number }
    };
  }

  constructor() {
    super();

    this.src = '';
    this.duration = 0;
    this.videoVolumeInput = 0.5;
    this.videoVolume = 50;
    this.videoCurrentTime = 0;
    this.isLoading = true;
  }

  firstUpdated() {
    const video = this.shadowRoot.querySelector('video');
    const videoContainer = this.shadowRoot.querySelector('.video-container');
    const controller = this.shadowRoot.querySelector('.controller');
    const spinner = this.shadowRoot.querySelector('.video-spinner');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');
    const progressBar = this.shadowRoot.querySelector('.progress-bar');
    const progressBarContainer = this.shadowRoot.querySelector('.progress-bar-container');
    const bufferBar = this.shadowRoot.querySelector('.progress-bar-buffer');
    const volumeInput = this.shadowRoot.querySelector('.input-range-volume');
    const btnVolume = this.shadowRoot.querySelector('.btn-volume');
    const inputRangeContainer = this.shadowRoot.querySelector('.input-range-container');

    video.addEventListener('loadeddata', event => {
      this.duration = event.target.duration;
      this.isLoadedData = false;

      spinner.style.display = 'none';
      playPreview.style.display = 'block';
    });

    video.addEventListener('timeupdate', () => {
      const buffer = (video.buffered.end(0) / this.duration) * 100;
      const percent = (video.currentTime * 100) / this.duration;
      this.videoCurrentTime = Math.round(video.currentTime);

      progressBar.style.width = `${percent}%`;
      bufferBar.style.width = `${buffer}%`;
    });

    volumeInput.addEventListener('input', e => {
      const percent = e.target.value * 0.01;
      video.volume = percent;

      this.videoVolumeInput = percent;
      this.videoVolume = e.target.value;

      this.setVolumeButton();
    });

    btnVolume.addEventListener('mouseover', () => inputRangeContainer.classList.add('opened'));
    btnVolume.addEventListener('mouseleave', () => inputRangeContainer.classList.remove('opened'));

    videoContainer.addEventListener('mouseleave', () => {
      if (!video.paused) {
        progressBarContainer.classList.add('hide');
        controller.classList.add('hide');
      }
    });

    videoContainer.addEventListener('mouseover', () => {
      progressBarContainer.classList.remove('hide');
      controller.classList.remove('hide');
    });

    progressBarContainer.addEventListener('mousemove', e => {
      // console.log(e);
    });
    progressBarContainer.addEventListener('mouseover', e => {
      progressBarContainer.style.height = '7px';
    });

    progressBarContainer.addEventListener('mouseleave', e => {
      progressBarContainer.style.height = 'var(--progress-bar-height)';
    });
  }

  setVolumeButton(level = this.videoVolumeInput) {
    const volumePath = this.shadowRoot.querySelector('.volume-path');
    const volumeUp = 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z';
    const volumeMute = 'M7 9v6h4l5 5V4l-5 5H7z';
    const volumeDown = 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z';

    if (level > 0) {
      if (level < 0.5) {
        volumePath.setAttribute('d', volumeDown);
      } else {
        volumePath.setAttribute('d', volumeUp);
      }
    } else {
      volumePath.setAttribute('d', volumeMute);
    }
  }

  switchVolume() {
    const video = this.shadowRoot.querySelector('video');
    const volume = this.shadowRoot.querySelector('.input-range-volume');

    if (video.volume > 0) {
      video.volume = 0;
      volume.value = 0;
    } else {
      video.volume = this.videoVolumeInput;
      volume.value = this.videoVolume;
    }

    this.setVolumeButton(video.volume);
  }

  switchVideo() {
    const video = this.shadowRoot.querySelector('video');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');
    const playSvg = this.shadowRoot.querySelector('.play-path');

    const playSvgCode = 'M6 19h4V5H6v14zm8-14v14h4V5h-4z';
    const pauseSvgCode = 'M8 5v14l11-7z';

    if (!this.isLoadedData) {
      if (video.paused) {
        video.play();
        playPreview.style.display = 'none';
        playSvg.setAttribute('d', playSvgCode);
      } else {
        video.pause();
        playPreview.style.display = 'block';
        playSvg.setAttribute('d', pauseSvgCode);
      }
    }
  }

  timeFormatter(seconds_) {
    const parseSeconds = parseInt(seconds_);
    let hours = Math.floor(parseSeconds / 3600);
    let minutes = Math.floor((parseSeconds - (hours * 3600)) / 60);
    let seconds = parseSeconds - (hours * 3600) - (minutes * 60);

    hours = (hours > 0) ? `${hours}:` : '';
    minutes = (hours > 0 && minutes < 10) ? `0${minutes}:` : `${minutes}:`;
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    return `${hours}${minutes}${seconds}`;
  }

  openFullscreen() {
    const video = this.shadowRoot.querySelector('video');

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
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
        <div class="progress-bar-container">
          <div class="progress-bar-buffer"></div>
          <div class="progress-bar">
            <div class="progress-bar-pointer"></div>
          </div>
        </div>
        <div class="controller">
          <div class="control-box">
            <div class="video-buttons">
              <button class="btn-play" @click="${this.switchVideo}">${videoPlayBtn}</button>
              <button class="btn-volume" @click="${this.switchVolume}">${videoVolumeUp}</button>
              <div class="input-range-container">
                <input class="input-range-volume" type="range" min="0" max="100" step="1" value="50">
              </div>
              <div class="timer">
                <span>${this.timeFormatter(this.videoCurrentTime)}</span><span class="timer-separator">/</span><span>${this.timeFormatter(this.duration)}</span>
              </div>
            </div>
            <div>
              <button class="btn-play" @click="${this.openFullscreen}">${videoFullScreen}</button>
            </div>
          </div>
        </div>
        <button class="btn-play-preview" @click="${this.switchVideo}">${videoPlayPreview}</button>
        ${videoSpinner}
      </div>
    `;
  }
}
