import { LitElement, html, css } from 'lit-element';
import { MAX_DROP_HEIGHT } from './utils/constants';

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
      accordion: { type: Boolean, attribute: 'accordion' }
    };
  }

  addTransition(element, transition, height, maxHeight, icon, rotate) {
    element.style.transition = transition;
    element.style.height = height;
    element.style.maxHeight = maxHeight;
    icon.rotateIcon(rotate);
  }

  dropdownListIterator(list, element, time, type) {
    list.forEach(x => {
      const dropdown = x.shadowRoot.querySelector('.dropdown');
      if (dropdown.style.maxHeight === MAX_DROP_HEIGHT || element === dropdown) {
        this.addTransition(dropdown, `max-height ${time}s cubic-bezier(0, .6, 0, 1)`, 'unset', '0', x, '0');
        if (element === dropdown) {
          this.addTransition(dropdown, `max-height ${time}s ${type}`, 'auto', MAX_DROP_HEIGHT, x, '180');
        }
      }
    });
  }

  setCollapse(list, type, time) {
    this.shadowRoot.addEventListener('set-collapse', e => {
      const element = e.target.shadowRoot.querySelector('.dropdown');
      const cubicTransition = `max-height ${time}s cubic-bezier(0, 1, 0, 1)`;

      if (element.style.maxHeight === MAX_DROP_HEIGHT) {
        this.addTransition(element, cubicTransition, 'unset', '0', e.target, '0');
      } else {
        this.dropdownListIterator(list, element, time, type);
      }
    });
  }

  collapseDropdown() {
    const list = this.getDropdownList();

    if (list.length > 0) {
      list.forEach(x => { x.collapse = true; });
      const transitionType = list.length > 1 ? 'linear' : 'ease-in-out';
      const transitionSpeed = list.length > 1 ? '1' : '.8';

      this.setCollapse(list, transitionType, transitionSpeed);
    }
  }

  getDropdownList() {
    const dropdownList = this.querySelectorAll('seed-dropdown');
    let slottedList = this.querySelector('slot');
    slottedList = (slottedList) ? slottedList.assignedElements() : [];

    if (dropdownList.length > 0) return dropdownList;
    if (slottedList.length > 0) return slottedList;
    return [];
  }

  firstUpdated() {
    this.collapseDropdown();
  }

  render() {
    return html`<slot></slot>`;
  }
}
