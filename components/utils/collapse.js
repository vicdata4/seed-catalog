import { MAX_DROP_HEIGHT } from './constants';

/**
   *
   * transition()
   * Set .dropdown transition values
   * @param {Object} { dropdown, transition, height, maxHeight }
   */

const transition = ({ dropdown, transition, height, maxHeight }) => {
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
   * @param {Object} { list, element, time, type }
   */

const collapseAccordion = ({ list, element, time, type }) => {
  list.forEach(component => {
    const dropdown = component.shadowRoot.querySelector('.dropdown');
    const isClosed = element === dropdown;
    const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;

    if (isOpened) {
      transition({
        dropdown,
        transition: `${time} cubic-bezier(0, .6, 0, 1)`,
        height: 'unset',
        maxHeight: '0'
      });

      component.rotateIcon('0');
    }

    if (isClosed) {
      transition({
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
   * @param {Object} { component, list, time, type }
   */

export const collapseUtils = ({ component, list, time, type }) => {
  const dropdown = component.target.shadowRoot.querySelector('.dropdown');
  const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;

  if (isOpened) {
    transition({
      dropdown,
      transition: `${time} cubic-bezier(0, 1, 0, 1)`,
      height: 'unset',
      maxHeight: '0'
    });
    component.target.rotateIcon('0');
  } else {
    collapseAccordion({ list, element: dropdown, time, type });
  }
};
