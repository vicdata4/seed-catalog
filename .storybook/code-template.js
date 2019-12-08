import { html } from 'lit-element';

const htmlV = html`<style> .hall { white-space: pre-line; margin-left: 15px;} .light-txt { color: #53f7ef; } </style>`;

export const codeGenerator = (open, close, content) => {
  return html`${htmlV}
    <span class="light-txt">${open}</span>
    <div class="hall">${content}</div>
    <span class="light-txt">${close}</span>`;
};

export const slottedCode = (attr = null) => {
  return html`${`<seed-dropdown`}${attr ? html` <span class="light-txt">${attr}</span>` : ``}>
      ${dropdownContent()}${`</seed-dropdown>`}`;
};

export const dropdownContent = () => {
  return html`<div style="margin-left: 15px;">${`<button id="drop1" slot="button" class="sd-btn blue"><i class="material-icons">local_library</i>Collapse 1</button>
          <p slot="content">Lorem ipsum dolor sit amet</p>`}</div>`;
};

export const carouselContent = () => {
  return html`<div>${`<div class="black">Black</div>
  <div class="red">Red</div>
  <div class="blue">Blue</div>
  <div class="green">Green</div>`}</div>`;
};

export const accordionContent = () => {
  return html`${slottedCode()}
    ${slottedCode()}
    ${slottedCode()}
    ${slottedCode()}`;
};