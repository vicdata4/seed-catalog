import { LitElement, html, css } from 'lit-element';
import { MAX_DROP_HEIGHT } from './utils/constants';
import { onClickListener, setHeight } from './utils/dropdown';
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
          z-index: 888;
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
      position: { type: String },
      maxWidth: { type: String },
      backgroundColor: { type: String },
      clickout: { type: Boolean, attribute: 'clickout' },
      collapse: { type: Boolean, attribute: 'collapse' },
      rotate: { type: Boolean, attribute: 'rotate' }
    };
  }

  constructor() {
    super();
    this.maxWidth = this.maxWidth || 'unset';
    this.backgroundColor = this.backgroundColor || 'white';
  }

  /**
   * Rotate button-icon if rotate-attribute exist
   * @param {String} value
   */
  rotateIcon(value) {
    const icon = this.slotted.assignedNodes()[0].querySelector('i');
    if (this.rotate && icon) {
      icon.style.transition = 'transform .2s ease-in';
      icon.style.transform = `rotate(${value}deg)`;
    }
  }

  /**
   * Set height value when click on dropdown button
   */
  setDropdown() {
    const isOpen = this.dropdown.style.height === 'auto';

    setHeight(
      this.dropdown,
      isOpen ? 'unset' : 'auto',
      isOpen ? '0' : MAX_DROP_HEIGHT
    );
    this.rotateIcon(isOpen ? '0' : '180');
  }

  /**
   * Dispatch event when click on slotted dropdown button (collapse mode)
   * @param {Event} event
   */
  setCollapse(event) {
    this.dispatchEvent(
      new CustomEvent('set-collapse', {
        bubbles: true,
        composed: true,
        detail: { event }
      })
    );
  }

  /**
   * Set onCLickListener utility in order to close dropdown
   * onClick out of the component
   */
  dropdownClickListener() {
    if (this.clickout) {
      onClickListener(
        this.dropdown,
        this.rotateIcon.bind(this),
        this.slotted.assignedNodes()[0]
      );
    }
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('.dropdown');
    this.slotted = this.shadowRoot.querySelector('slot');

    this.dropdownClickListener();
  }

  render() {
    return html`
      <slot name="button" @click='${this.collapse ? this.setCollapse : this.setDropdown}'></slot>
      <div class="dropdown"
           style="position: ${this.position ? this.position : this.collapse ? 'relative' : 'absolute'};
                  max-width: ${this.maxWidth}px;
                  background-color: ${this.backgroundColor};">
        <slot name="content"></slot>
      </div>
    `;
  }
}
