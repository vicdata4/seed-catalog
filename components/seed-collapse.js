import { LitElement, html, css } from 'lit-element';
import { collapseUtils } from './utils/collapse';

export class SeedCollapse extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          flex: auto;
        }
      `
    ];
  }

  static get properties() {
    return {
      speed: { type: String },
      accordion: { type: Boolean, attribute: 'accordion' },
      basic: { type: Boolean, attribute: 'basic' }
    };
  }

  /**
   * Return dropdown-list from collapse component
   * or slotted-list from accordion component
   *
   * @return {Array}
   */
  getDropdownList() {
    const dropdownList = this.querySelectorAll('seed-dropdown');
    let slottedList = this.querySelector('slot');
    slottedList = (slottedList) ? slottedList.assignedElements() : [];

    return (dropdownList.length > 0) ? dropdownList : (slottedList.length > 0) ? slottedList : [];
  }

  /**
   * Get dropdown list and set collapse property to true.
   * Call to collapseUtils() with predefined type and speed
   */
  setCollapseUtils() {
    const list = this.getDropdownList();

    if (list.length > 0) {
      list.forEach(x => { x.collapse = true; });
      this.shadowRoot.addEventListener('set-collapse', component => {
        const manyDropdowns = list.length > 1;
        collapseUtils({
          component,
          list,
          type: manyDropdowns ? 'linear' : 'ease-in-out',
          time: `max-height ${this.basic ? '0' : manyDropdowns ? '1' : '.8'}s`
        });
      });
    }
  }

  firstUpdated() {
    this.setCollapseUtils();
  }

  render() {
    return html`<slot></slot>`;
  }
}
