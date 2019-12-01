import { MAX_DROP_HEIGHT } from './constants';

export const setHeight = (dropdown, height, maxHeight) => {
  dropdown.style.height = height;
  dropdown.style.maxHeight = maxHeight;
};

export const onClickListener = (dropdown, rotate, button) => {
  document.addEventListener('click', function(e) {
    if ((e.target.tagName !== 'BUTTON' || e.target.id !== button.id) && e.target.className !== 'content') {
      setHeight(dropdown, 'unset', '0');
      rotate('0');
    } else if (e.target === this) {
      setHeight(dropdown, 'auto', MAX_DROP_HEIGHT);
    }
  });
};
