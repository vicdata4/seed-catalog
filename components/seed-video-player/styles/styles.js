import { css } from 'lit-element';

export const styles = css`
:host {
  --control-container-height: 50px;
  --progress-bar-height: 4px;
  --controller-opacity-transition: opacity .8s;
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
  transition: var(--controller-opacity-transition);
}

.controller.hide, .progress-bar-container.hide {
  /* transition-delay: 1s; */
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
  --progress-bar-border: 10px;
  position: absolute;
  bottom: calc(var(--control-container-height) - var(--progress-bar-border));

  width: 100%;
  height: var(--progress-bar-height);

  border-top: calc(var(--progress-bar-border) + 10px) solid transparent;
  border-bottom: var(--progress-bar-border) solid transparent;
  background: rgba(255,255,255,.3);
  background-clip: content-box;

  transition: var(--controller-opacity-transition);
  z-index: 99;
  cursor: pointer;
}

.progress-bar {
  position: absolute;
  height: 100%;
  background-color: red !important;
  transition: width 2s;
}

.progress-bar-container:hover > .progress-bar-hover {
  position: absolute;
  background-color: rgba(255,255,255,.6);
  width: auto;
  height: 100%;
}

.progress-bar-pretime:hover {
  display: none;
  position: absolute;
  right: 0;
  background-color: red;
  width: 20px;
  height: 20px;
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
`;
