import { LitElement, html, css } from 'lit-element';
import { MAX_DROP_HEIGHT } from './utils/constants';

const collapseTransition = params => {
  const { dropdown, transition, height, maxHeight } = params;
  dropdown.style.transition = transition;
  dropdown.style.height = height;
  dropdown.style.maxHeight = maxHeight;
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

  /**
   * collapseAccordionList()
   *
   * This function close opened dropdowns and open closed dropdowns
   * in order to get the accordion effect
   *
   * @param {Array} list seed-dropdown list
   * @param {Tag} element seed-dropdown > .dropdown
   * @param {String} time (max-with 5s)
   * @param {String} type (ease-in-out, linear)
   */

  collapseAccordionList(list, element, time, type) {
    list.forEach(component => {
      const dropdown = component.shadowRoot.querySelector('.dropdown');
      const isClosed = element === dropdown;
      const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;

      if (isOpened) {
        collapseTransition({
          dropdown,
          transition: `${time} cubic-bezier(0, .6, 0, 1)`,
          height: 'unset',
          maxHeight: '0'
        });
        component.rotateIcon('0');
      }

      if (isClosed) {
        collapseTransition({
          dropdown,
          transition: `${time} ${type}`,
          height: 'auto',
          maxHeight: MAX_DROP_HEIGHT
        });
        component.rotateIcon('180');
      }
    });
  }

  /**
   * setCollapse()
   *
   * @param {Array} list seed-dropdown list
   * @param {String} time (max-with 5s)
   * @param {String} type (ease-in-out, linear)
   */

  setCollapse(list, type, time) {
    this.shadowRoot.addEventListener('set-collapse', component => {
      const dropdown = component.target.shadowRoot.querySelector('.dropdown');
      const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;
      if (isOpened) {
        collapseTransition({
          dropdown,
          transition: `${time} cubic-bezier(0, 1, 0, 1)`,
          height: 'unset',
          maxHeight: '0'
        });
        component.target.rotateIcon('0');
      } else {
        this.collapseAccordionList(list, dropdown, time, type);
      }
    });
  }

  /**
   * getDropdownList()
   *
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
   *
   * Get dropdownList() and set transition and speed according to list length
   */

  collapseDropdown() {
    const list = this.getDropdownList();

    if (list.length > 0) {
      list.forEach(x => { x.collapse = true; });
      const transitionType = list.length > 1 ? 'linear' : 'ease-in-out';
      const transitionSpeed = list.length > 1 ? '1' : '.8';
      this.setCollapse(list, transitionType, `max-height ${transitionSpeed}s`);
    }
  }

  firstUpdated() {
    this.collapseDropdown();
  }

  render() {
    return html`<slot></slot>`;
  }
}
