import { LitElement, html, css } from 'lit-element';
import { MAX_DROP_HEIGHT } from './utils/constants';

const addTransition = params => {
  const {
    dropdown,
    component,
    transition,
    height = 'unset',
    maxHeight = '0',
    rotate = '0'
  } = params;

  dropdown.style.transition = transition;
  dropdown.style.height = height;
  dropdown.style.maxHeight = maxHeight;
  component.rotateIcon(rotate);
};

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

  dropdownListIterator(list, element_, time, type) {
    list.forEach(component => {
      const dropdown = component.shadowRoot.querySelector('.dropdown');
      if (dropdown.style.maxHeight === MAX_DROP_HEIGHT || element_ === dropdown) {
        addTransition({
          dropdown,
          component,
          transition: `max-height ${time}s cubic-bezier(0, .6, 0, 1)`
        });
        if (element_ === dropdown) {
          addTransition({
            dropdown,
            component,
            transition: `max-height ${time}s ${type}`,
            height: 'auto',
            maxHeight: MAX_DROP_HEIGHT,
            rotate: '180'
          });
        }
      }
    });
  }

  setCollapse(list, type, time) {
    this.shadowRoot.addEventListener('set-collapse', element_ => {
      const dropdown = element_.target.shadowRoot.querySelector('.dropdown');
      if (dropdown.style.maxHeight === MAX_DROP_HEIGHT) {
        addTransition({
          dropdown,
          component: element_.target,
          transition: `max-height ${time}s cubic-bezier(0, 1, 0, 1)`
        });
      } else {
        this.dropdownListIterator(list, dropdown, time, type);
      }
    });
  }

  getDropdownList() {
    const dropdownList = this.querySelectorAll('seed-dropdown');
    let slottedList = this.querySelector('slot');
    slottedList = (slottedList) ? slottedList.assignedElements() : [];

    return (dropdownList.length > 0) ? dropdownList : (slottedList.length > 0) ? slottedList : [];
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

  firstUpdated() {
    this.collapseDropdown();
  }

  render() {
    return html`<slot></slot>`;
  }
}
