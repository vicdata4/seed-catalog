import { LitElement, html, css } from 'lit-element';

export class SeedProgressRing extends LitElement {
  static get styles() {
    return [
      css`
        :host {
            --progress-ring-color: #f70bdd;
            --progress-ring-background: #404040;
            --ring-background: transparent;
            --progress-ring-transition: stroke-dashoffset .5s linear;
            --progress-ring-radius: 90px;
            --progress-ring-width: 10px;
            --progress-ring-long: calc(2 * 3.14 * var(--progress-ring-radius));

            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .upload-progress-container {
            display: none;
        }

        .progress-ring {
            transform: rotate(-90deg);
        }
            
        .progress-ring circle {
            transition: var(--progress-ring-transition);
            stroke-width: var(--progress-ring-width);
        }

        .progress-ring-background {
            stroke-dashoffset: 0;
            stroke-dasharray: var(--progress-ring-long);
            stroke: var(--progress-ring-background);
            fill: var(--ring-background);
            r: var(--progress-ring-radius);
        }

        .progress-ring-bar {
            stroke-dashoffset: var(--progress-ring-long);
            stroke-dasharray: var(--progress-ring-long);
            stroke: var(--progress-ring-color);
            r: var(--progress-ring-radius);
        }

        .percent-progress-value {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }
      `
    ];
  }

  static get properties() {
    return {
      percent: { type: Number, reflect: true },
      onlyText: { type: Boolean, attribute: 'only-text' },
      ringColor: { type: String },
      ringBackground: { type: String },
      background: { type: String },
      textColor: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.percent = 0;
    this.ringColor = null;
    this.ringBackground = null;
    this.background = null;
    this.textColor = 'white';
    this.onlyText = false;
    this.text = '';
  }

  setPercent(percent) {
    const ringLong = 2 * 3.14 * parseFloat(getComputedStyle(this).getPropertyValue('--progress-ring-radius'));
    const value = ringLong - (percent * ringLong / 100);

    this.uploadPercent = percent;
    this.shadowRoot.querySelector('.progress-ring-bar').style.strokeDashoffset = value;
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    if (name === 'percent' && newval <= 100 && this.shadowRoot.querySelector('.progress-ring-bar')) this.setPercent(newval);
  }

  firstUpdated() {
    if (this.ringColor) this.style.setProperty('--progress-ring-color', this.ringColor);
    if (this.ringBackground) this.style.setProperty('--progress-ring-background', this.ringBackground);
    if (this.background) this.style.setProperty('--ring-background', this.background);

    this.setPercent(this.percent);
  }

  render() {
    return html`
      <svg class="progress-ring" width="200" height="200" viewPort="0 0 100 100" version="1.1">
        <circle class="progress-ring-background" cx="100" cy="100"></circle>
        <circle class="progress-ring-bar" cx="100" cy="100" fill="transparent"></circle>
      </svg>
      <div class="percent-progress-value">
        <div class="percent-value" .style="color: ${this.textColor}">${ !this.onlyText ? this.percent : ''}${this.text}</div>
      </div>
    `;
  }
}
