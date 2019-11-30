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

  setParams(element, transition, height, maxHeight) {
    element.style.transition = transition;
    element.style.height = height;
    element.style.maxHeight = maxHeight;
  }

  setCollapse(collapseList, type, time_) {
    this.shadowRoot.addEventListener('set-collapse', e => {
      const evElement = e.target.shadowRoot.querySelector('.dropdown');
      const time = time_;
      const cubicTransition = `max-height ${time}s cubic-bezier(0, 1, 0, 1)`;

      if (evElement.style.maxHeight === MAX_DROP_HEIGHT) {
        this.setParams(evElement, cubicTransition, 'unset', '0');
        e.target.rotateIcon('0');
      } else {
        collapseList.forEach(x => {
          const dropdown = x.shadowRoot.querySelector('.dropdown');
          if (dropdown.style.maxHeight === MAX_DROP_HEIGHT || evElement === dropdown) {
            setTimeout(() => {
              this.setParams(
                dropdown,
                `max-height ${time}s cubic-bezier(0, .6, 0, 1)`,
                'unset',
                '0'
              );
              x.rotateIcon('0');
              setTimeout(() => {
                if (evElement === dropdown) {
                  this.setParams(
                    dropdown,
                    `max-height ${time}s ${type}`,
                    'auto',
                    MAX_DROP_HEIGHT
                  );
                  x.rotateIcon('180');
                }
              });
            });
          }
        });
      }
    });
  }

  firstUpdated() {
    const dropdownList = this.querySelectorAll('seed-dropdown');

    let collapseList = [];
    let slottedList = this.querySelector('slot');
    slottedList = (slottedList) ? slottedList.assignedElements() : [];

    if (dropdownList.length > 0) collapseList = dropdownList;
    if (slottedList.length > 0) collapseList = slottedList;

    if (collapseList.length === 1) {
      collapseList[0].collapse = true;
      this.setCollapse(collapseList, 'ease-in-out', '.8');
    } else {
      if (this.accordion && collapseList.length > 0) {
        collapseList.forEach(x => {
          x.collapse = true;
        });
      }
      this.setCollapse(collapseList, 'linear', '1');
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
