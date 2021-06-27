<img src="https://cdn.jsdelivr.net/gh/vicdata4/doc-template/assets/seed-icon.png" width="40">

## Seed Carousel
### [Storybook](https://vicdata4.github.io/seed-catalog/?path=/story/seed-catalog--carousel)

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
import '@seed-catalog/carousel';
import '@seed-catalog/stepper';

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