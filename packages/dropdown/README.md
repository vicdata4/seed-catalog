![](https://cdn.jsdelivr.net/gh/vicdata4/seed/assets/logo_md.png?v=4&s=100)

## Seed Dropdown ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.com/?path=/story/seed-catalog--dropdown)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components

Npm

```
npm install @seed-catalog/dropdown
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from '@seed-catalog/styles';
import '@seed-catalog/dropdown';

class MyComponent extends LitElement {
  static get styles() {
    return [
      seedStyle,
      css`
        ...
      `
    ];
  }

  render() {
    return html`
      <seed-dropdown position="relative">
        <button slot="button" class="sd-btn red">Dropdown</button>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
          eget viverra diam. Donec euismod mattis dignissim.
        </p>
      </seed-dropdown>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/dropdown