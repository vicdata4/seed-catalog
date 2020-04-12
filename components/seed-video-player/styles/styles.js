import { css } from 'lit-element';

export const styles = css`
:host {
  --control-container-height: 50px;
  --progress-bar-height: 4px;
  --progress-bar-transition: all 2s;
  --progress-bar-grey: rgba(255, 255, 255, 0.6);
  --controller-opacity-transition: opacity .8s;
  --video-main-color: red;
}

::-webkit-media-controls, video::-webkit-media-controls, video::-webkit-media-controls-enclosure {
  display: none !important;
}

.video-container {
  position: relative;
  display: grid;
  align-content: center;
  min-width: 300px;
  background-color: rgba(0,0,0,.5);
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

  overflow: hidden;
  background-color: rgba(0,0,0,0.5);
  background-image: linear-gradient(to top, rgba(0,0,0,.8) , rgba(0,0,0,.1));
  transition: var(--controller-opacity-transition);
}

.controller.hide, .progress-bar-container.hide {
  opacity: 0;
}

.video-spinner {
  position: absolute;
  display: block;
  align-self: center;
  margin-top: calc((var(--control-container-height)) * -1);
}

.btn-play-preview, .btn-replay-preview {
  display: none;
  position: absolute;
  align-self: center;
  justify-self: center;
  border-radius: 100%;
  background-color: rgba(0,0,0,.5);
  border: none;
  padding: 0;
  margin: 0;
  margin-top: calc((var(--control-container-height)) * -1);
  cursor: pointer;
}

.btn-play, .btn-replay, .btn-volume, .btn-options {
  display: flex;
  background: none;
  border: none;
  padding: 0 3px;

  outline: none;
  cursor: pointer;
}

.btn-replay {
  display: none;
}

.video-buttons {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.progress-bar-container {
  --progress-bar-border: 10px;
  position: absolute;
  bottom: calc(var(--control-container-height) - var(--progress-bar-border));

  width: 100%;
  height: var(--progress-bar-height);

  border-top: calc(var(--progress-bar-border) * 2) solid transparent;
  border-bottom: var(--progress-bar-border) solid transparent;
  background: rgba(255,255,255,.3);
  background-clip: content-box;

  transition: var(--controller-opacity-transition);
  z-index: 99;
  cursor: pointer;
}

.progress-bar-container-relative {
  position: relative;
  width: 100%;
  height: 100%;
}

.progress-bar {
  position: relative;
  height: 100%;
  background-color: var(--video-main-color);
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: var(--progress-bar-transition);
}

.progress-bar.hide-transition, .progress-bar-pointer.hide-transition {
  transition-duration: 0s;
}

.progress-bar-container:hover > .progress-bar-container-relative > .progress-bar-hover {
  position: absolute;
  background-color: var(--progress-bar-grey);
  width: auto;
  height: 100%;
  z-index: -1;
}

.progress-bar-position {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hover-time-indicator {
  position: absolute;
  bottom: calc(var(--progress-bar-height) + var(--control-container-height) + 10px);
  width: auto;
  height: auto;
  padding: 0px 10px;
  border: 1px solid grey;
  background-color: rgba(0,0,0,0.5);
  font-size: 14px;

  color: white;
  border-radius: 10px;
  opacity: 0;
  transition: opacity .5s;
}

.progress-bar-buffer {
  position: absolute;
  width: 0%;
  height: inherit;
  background-color: rgba(255,255,255,.7);
  transition: width .2s;
  z-index: -1;
}

/*
.progress-bar-pointer {
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: visible;
  padding-left: 0;
  transform: translateX(0);
  transition: all .3s;
  z-index: -1;
}

.pointer-circle {
  transition: r .2s;
}

.progress-bar-container:hover > div > .progress-bar-pointer > svg  > circle {
  r: 8;
}
*/

.input-range-container {
  display: flex;
  align-items: center;
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
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 5px;
  width: 80px;
  border-radius: 10px;
  margin: 7px 2px;
  background-color: var(--progress-bar-grey);
  cursor: pointer;
}

.input-range-volume::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 100%;
  background-color: var(--video-main-color);
  overflow: hidden;
  cursor: pointer;
}

/* Firefox support */
.input-range-volume::-moz-range-thumb {
  -moz-appearance: none;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 100%;
  background-color: var(--video-main-color);
  overflow: hidden;
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

.controller-options {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.options-separator {
  height: 30px;
  margin: 0 10px;
}

.options-separator-line {
  border-left: 1px solid var(--video-main-color);
  height: 100%;
}

.controller-options-buttons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  min-width: 65px;
}
`;
