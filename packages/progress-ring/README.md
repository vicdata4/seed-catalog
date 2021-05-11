![](https://cdn.jsdelivr.net/gh/vicdata4/seed/assets/logo_md.png?v=4&s=100)

## Seed Progress Ring ![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#bf4545](https://via.placeholder.com/15/bf4545/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#3f76b6](https://via.placeholder.com/15/3f76b6/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#1C8281](https://via.placeholder.com/15/1C8281/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#e6af0e](https://via.placeholder.com/15/e6af0e/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#903e8d](https://via.placeholder.com/15/903e8d/000000?text=+)![#fff](https://via.placeholder.com/15/fff/000000?text=+)![#2f2d2d](https://via.placeholder.com/15/2f2d2d/000000?text=+)

### [Storybook](https://vicdata4.github.io/seed-catalog/?path=/story/seed-catalog--progress-ring)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components

Npm

```
npm install @seed-catalog/progress-ring
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import '@seed-catalog/progress-ring';

class MyComponent extends LitElement {
  render() {
    return html`
      <seed-progress-ring></seed-progress-ring>
      
      <seed-progress-ring .percent="20" text="%"></seed-progress-ring>

      <seed-progress-ring .percent="20" custom>
        <div slot="custom">
          ...
        </div>
      </seed-progress-ring>

      <seed-progress-ring .percent="70" text="Uploading"></seed-progress-ring>

      <seed-progress-ring .percent="10" text="Uploading" only-text></seed-progress-ring>
      
      Optional attributes: ringColor / ringBackground / background / textColor

      <seed-progress-ring 
        .percent="20"
        ringColor="#f70bdd"
        ringBackground="rgba(0, 0, 0, 0.3)"
        background="grey">
      </seed-progress-ring>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/progress-ring