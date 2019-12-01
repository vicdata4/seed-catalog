import { LitElement, html, css } from 'lit-element';
import { MAX_DROP_HEIGHT } from './utils/constants';
import { seedStyle } from '../styles';

const setHeight = (dropdown, height, maxHeight) => {
  dropdown.style.height = height;
  dropdown.style.maxHeight = maxHeight;
};

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
      clickout: { type: Boolean, attribute: 'clickout' },
      maxWidth: { type: String },
      speed: { type: String }
    };
  }

  constructor() {
    super();
    this.maxWidth = this.maxWidth || 'unset';
    this.backgroundColor = this.backgroundColor || 'white';
    this.speed = this.speed || '.5';
  }

  rotateIcon(value) {
    const icon = this.slotted.assignedNodes()[0].querySelector('i');
    if (this.rotate) {
      icon.style.transition = 'transform .2s ease-in';
      icon.style.transform = `rotate(${value}deg)`;
    }
  }

  openDropdown() {
    const isOpen = this.dropdown.style.height === 'auto';
    const height = isOpen ? 'unset' : 'auto';
    const maxHeight = isOpen ? '0' : MAX_DROP_HEIGHT;

    setHeight(this.dropdown, height, maxHeight);
    this.rotateIcon(isOpen ? '0' : '180');
  }

  openCollapse(event) {
    this.dispatchEvent(
      new CustomEvent('set-collapse', {
        bubbles: true,
        composed: true,
        detail: { event }
      })
    );
  }

  dropdownClickListener() {
    if (this.clickout) {
      const dropdown = this.dropdown;
      const rotate = this.rotateIcon.bind(this);
      const button = this.slotted.assignedNodes()[0];

      document.addEventListener('click', function(e) {
        if ((e.target.tagName !== 'BUTTON' || e.target.id !== button.id) && e.target.className !== 'content') {
          setHeight(dropdown, 'unset', '0');
          rotate('0');
        } else if (e.target === this) {
          setHeight(dropdown, 'auto', MAX_DROP_HEIGHT);
        }
      });
    }
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('.dropdown');
    this.slotted = this.shadowRoot.querySelector('slot');

    this.dropdownClickListener();
    if (this.collapse) {
      this.rotate = true;
      this.speed = '.8';
    }
  }

  render() {
    return html`
      <slot name="button" @click='${this.collapse ? this.openCollapse : this.openDropdown}'></slot>
      <div class="dropdown"
           style="position: ${this.position ? this.position : this.collapse ? 'relative' : 'absolute'};
                  max-width: ${this.maxWidth}px;
                  background-color: ${this.backgroundColor};">
        <slot name="content"></slot>
      </div>
    `;
  }
}
