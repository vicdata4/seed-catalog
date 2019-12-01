import { MAX_DROP_HEIGHT } from './constants';

/**
   *
   * collapseTransition()
   * Set .dropdown transition values
   * @param {Object} params Transition attributes
   */

const collapseTransition = params => {
  const { dropdown, transition, height, maxHeight } = params;
  dropdown.style.transition = transition;
  dropdown.style.height = height;
  dropdown.style.maxHeight = maxHeight;
};

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

const collapseAccordionList = ({ list, element, time, type }) => {
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
};

/**
   * collapseUtils()
   *
   * @param {Object} component seed-dropdown
   * @param {Array} list
   * @param {String} time (max-with 5s)
   * @param {String} type (ease-in-out, linear)
   */

export const collapseUtils = ({ component, list, time, type }) => {
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
    collapseAccordionList({ list, element: dropdown, time, type });
  }
};
