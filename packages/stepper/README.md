<img src="https://cdn.jsdelivr.net/gh/vicdata4/doc-template/assets/seed-icon.png" width="40">

## Seed Stepper

### [Storybook](https://vicdata4.github.io/seed-catalog/?path=/story/seed-catalog--stepper)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components

Npm

```
npm install @seed-catalog/stepper
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import '@seed-catalog/stepper';

class MyComponent extends LitElement {
  render() {
    return html`
      <seed-stepper .index="${0}" .size="${4}"></seed-stepper>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/stepper