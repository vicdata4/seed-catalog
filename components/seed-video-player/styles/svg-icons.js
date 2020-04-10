import { svg } from 'lit-element';

export const videoSpinner = svg`<svg width="100%" height="100" class="video-spinner" viewBox="0 0 45 45" stroke="#fff"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>`;
export const videoPlayPreview = svg`<svg viewBox="0 0 24 24" fill="white" width="80px" height="auto"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
export const videoPlayBtn = svg`<svg viewBox="0 0 24 24" fill="white" width="30px" height="30px"><path class="play-path" d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
export const videoFullScreen = svg`<svg viewBox="0 0 24 24" fill="white" width="22px" height="22px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/></svg>`;

export const videoVolumeUp = svg`<svg viewBox="0 0 24 24" fill="white" width="22px" height="22px"><path class="volume-path" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
export const volumeOff = svg`<svg viewBox="0 0 24 24" fill="white" width="22px" height="22px"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
export const volumeMute = svg`<svg viewBox="0 0 24 24" fill="white" width="22px" height="22px"><path d="M7 9v6h4l5 5V4l-5 5H7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
export const volumeDown = svg`<svg viewBox="0 0 24 24" fill="white" width="22px" height="22px"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;

export const progressBarPointer = svg`<svg height="20" width="17"><circle cx="10" cy="10" r="7" fill="red" /></svg>`;
export const seedLogo = svg`<svg width="25" height="25" viewBox="0 0 70 70"><text fill="#fff" font-size="750px" font-family="SignPainter-HouseScript, SignPainter" transform="translate(12.415 63.822) scale(0.146)">s</text></svg>`;
