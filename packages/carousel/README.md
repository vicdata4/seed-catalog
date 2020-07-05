![](https://cdn.jsdelivr.net/gh/vicdata4/seed/assets/logo_md.png?v=4&s=100)

## Seed Carousel ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.com/?path=/story/seed-catalog--carousel)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components
- [Lodash debounce]()

Npm

```
npm install @seed-catalog/carousel
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import '@seed-catalog/carousel.js';
import '@seed-catalog/stepper.js';

class MyComponent extends LitElement {
  static get styles() {
    return [
      css`
        .custom-class {
            ...
        }
        `
    ];
  }

  render() {
    return html`
      <seed-carousel>
        <div class="custom-class">Card 1</div>
        <div class="custom-class">Card 2</div>
        <div class="custom-class">Card 3</div>
        <div class="custom-class">Card 4</div>
        // Optional stepper
        <seed-stepper slot="stepper"></seed-stepper>
      </seed-carousel>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/carousel