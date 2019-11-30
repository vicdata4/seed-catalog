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

  setParams(element, transition, height, maxHeight, icon, rotate) {
    element.style.transition = transition;
    element.style.height = height;
    element.style.maxHeight = maxHeight;
    icon.rotateIcon(rotate);
  }

  listIterator(list, element, time, type) {
    list.forEach(x => {
      const dropdown = x.shadowRoot.querySelector('.dropdown');
      if (dropdown.style.maxHeight === MAX_DROP_HEIGHT || element === dropdown) {
        this.setParams(dropdown, `max-height ${time}s cubic-bezier(0, .6, 0, 1)`, 'unset', '0', x, '0');
        if (element === dropdown) {
          this.setParams(dropdown, `max-height ${time}s ${type}`, 'auto', MAX_DROP_HEIGHT, x, '180');
        }
      }
    });
  }

  setCollapse(list, type, time_) {
    this.shadowRoot.addEventListener('set-collapse', e => {
      const element = e.target.shadowRoot.querySelector('.dropdown');
      const time = time_;
      const cubicTransition = `max-height ${time}s cubic-bezier(0, 1, 0, 1)`;

      if (element.style.maxHeight === MAX_DROP_HEIGHT) {
        this.setParams(element, cubicTransition, 'unset', '0', e.target, '0');
      } else {
        this.listIterator(list, element, time, type);
      }
    });
  }

  firstUpdated() {
    let list = [];
    const dropdownList = this.querySelectorAll('seed-dropdown');
    let slottedList = this.querySelector('slot');
    slottedList = (slottedList) ? slottedList.assignedElements() : [];

    if (dropdownList.length > 0) list = dropdownList;
    if (slottedList.length > 0) list = slottedList;

    if (list.length === 1) {
      list[0].collapse = true;
      this.setCollapse(list, 'ease-in-out', '.8');
    } else {
      if (this.accordion && list.length > 0) {
        list.forEach(x => { x.collapse = true; });
      }
      this.setCollapse(list, 'linear', '1');
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
