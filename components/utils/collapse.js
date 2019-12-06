import { MAX_DROP_HEIGHT } from './constants';

/**
 * Set close-collapse transition values
 * @param {String} time Transition time in seconds
 * @return {Object} Transition, height and maxHeight values
 */
const closeTransitionValues = time => {
  return {
    transition: `max-height ${time}s cubic-bezier(0, 1, 0, 1)`,
    height: 'unset',
    maxHeight: '0'
  };
};

/**
 * Set .dropdown transition values
 * @param {Object} { dropdown, transition, height, maxHeight }
 */
const transition = ({ dropdown, values }) => {
  dropdown.style.transition = values.transition;
  dropdown.style.height = values.height;
  dropdown.style.maxHeight = values.maxHeight;
};

/**
 * This function close opened dropdowns and open closed dropdowns
 * in order to get the accordion effect
 *
 * @param {Object} { list, element, time, type }
 */
const collapseAccordion = ({ list, element, time }) => {
  let closed = 0;
  let opened = 0;
  list.forEach(component => {
    const dropdown = component.shadowRoot.querySelector('.dropdown');
    const isClosed = element === dropdown;
    const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;

    if (isOpened) {
      opened = dropdown.scrollHeight;
    }

    if (isClosed) {
      closed = dropdown.scrollHeight;
    }
  });

  list.forEach(component => {
    const dropdown = component.shadowRoot.querySelector('.dropdown');
    const isClosed = element === dropdown;
    const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;

    if (isOpened) {
      transition({ dropdown, values: closeTransitionValues(time) });

      component.rotateIcon('0');
    }

    if (isClosed) {
      const isAnyOpened = opened > 0;
      const isNotBasicMode = time !== '0';
      // * 2.2 black
      const transition_ =
        isAnyOpened && isNotBasicMode
          ? `max-height ${(opened / closed)}s linear`
          : `max-height ${time}s ease-in-out`;

      transition({
        dropdown,
        values: {
          transition: transition_,
          height: 'auto',
          maxHeight: MAX_DROP_HEIGHT
        }
      });

      component.rotateIcon('180');
    }
  });
};

/**
 * @param {Object} { component, list, time, type }
 */
export const collapseUtils = ({ component, list, time }) => {
  const dropdown = component.target.shadowRoot.querySelector('.dropdown');
  const isOpened = dropdown.style.maxHeight === MAX_DROP_HEIGHT;

  if (isOpened) {
    transition({
      dropdown,
      values: closeTransitionValues(time)
    });
    component.target.rotateIcon('0');
  } else {
    collapseAccordion({ list, element: dropdown, time });
  }
};
