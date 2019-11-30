import { seedStyle } from '../styles';

function dedupeMixin(mixin) {
  return superClass => {
    const mixedClass = mixin(superClass);
    return mixedClass;
  };
}

export const SeedMixin = dedupeMixin(superclass =>
  // eslint-disable-next-line
  class SeedMixin extends superclass {
    static get styles() {
      return [seedStyle];
    }
  }
);
