![](https://cdn.jsdelivr.net/gh/vicdata4/seed/assets/logo_md.png?v=4&s=100)

## Seed Modal ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.com/?path=/story/seed-catalog--modal)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components

Npm

```
npm install @seed-catalog/modal
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from '@seed-catalog/styles';
import '@seed-catalog/modal';

class MyComponent extends LitElement {
  render() {
    return html`
      <seed-modal>
        <button slot="button" class="sd-btn blue">Open Modal</button>
        <div slot="header" class="header">      
          <span>Building Web Components</span>
          <button class="sd-icon clear close"><i class="material-icons blue-mate">close</i></button>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div slot="footer" class="footer">
          <button class="sd-btn black close">Close</button>
          <button class="sd-btn blue-mate">Send</button>
        </div>
      </seed-modal>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/modal