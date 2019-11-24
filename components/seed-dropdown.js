import { LitElement, html, css } from 'lit-element';
import { seedStyle } from '../styles';

export class SeedDropdown extends LitElement {
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
          display: inline-block;
        }

        .dropdown {
          position: relative;
          height: 0;
          max-height: 0;
          overflow: hidden;
          z-index: 999;
          font-size: 15px;
          color: black;
        }

        ::slotted(div) {
          display: flex;
          flex-direction: column;
        }

        ::slotted(p) {
          margin: 0;
          padding: 15px;
        }

        .show {
          height: auto;
          width: auto;
          background-color: white;
          max-height: 600px;
          transition: 250ms ease-out;
        }

        .hide {
          height: 0;
          max-height: 0 !important;
          transition: 250ms ease-in;
        }

        .house {
          max-width: 250px;
        }
      `
    ];
  }

  static get properties() {
    return {
      backgroundColor: { type: String },
      rotate: { type: Boolean, attribute: 'rotate' },
      position: { type: String },
      collapse: { type: Boolean, attribute: 'collapse' },
      maxWidth: { type: String },
      speed: { type: String }
    };
  }

  constructor() {
    super();
    this.position = this.position || 'absolute';
    this.maxWidth = this.maxWidth || 'unset';
    this.backgroundColor = this.backgroundColor || 'white';
    this.speed = this.speed || '.5';
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('.dropdown');

    if (!this.collapse) {
      const dropdown = this.dropdown;
      const rotate = this.rotateIcon.bind(this);
      const button = this.shadowRoot.querySelector('slot').assignedNodes()[0];

      document.addEventListener('click', function(e) {
        if (
          (e.target.tagName !== 'BUTTON' || e.target.id !== button.id) &&
          e.target.className !== 'content'
        ) {
          dropdown.style.height = 'unset';
          dropdown.style.maxHeight = '0';
          rotate('0');
        } else if (e.target === this) {
          dropdown.style.height = 'auto';
          dropdown.style.maxHeight = '600px';
        }
      });
    }

    if (this.collapse) {
      this.position = this.collapse ? 'relative' : 'absolute';
      this.rotate = true;
      this.speed = '.8';
    }
  }

  rotateIcon(value) {
    const icon = this.shadowRoot
      .querySelector('slot')
      .assignedNodes()[0]
      .querySelector('i');
    if (this.rotate) {
      icon.style.transition = 'transform .2s ease-in';
      icon.style.transform = `rotate(${value}deg)`;
    }
  }

  openCollapse() {
    if (this.dropdown.style.height === 'auto') {
      this.dropdown.style.height = 'unset';
      this.dropdown.style.maxHeight = '0';
      this.rotateIcon('0');
    } else {
      setTimeout(() => {
        this.dropdown.style.height = 'auto';
        this.dropdown.style.maxHeight = '600px';
        this.rotateIcon('180');
      });
    }
  }

  openCol(event) {
    this.dispatchEvent(
      new CustomEvent('set-collapse', {
        bubbles: true,
        composed: true,
        detail: { event }
      })
    );
  }

  render() {
    return html`
      <slot name="button" @click='${!this.collapse ? this.openCollapse : this.openCol}'></slot>
      <div class="dropdown" style="
            position: ${this.position};
            max-width: ${this.maxWidth}px;
            background-color: ${this.backgroundColor};
            ${this.collapse ? `transition: max-height ${this.speed || '0'}s ease-in-out` : ''};"
      >
        <slot name="content"></slot>
      </div>
    `;
  }
}
