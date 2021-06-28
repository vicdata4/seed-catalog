<img src="https://cdn.jsdelivr.net/gh/vicdata4/doc-template/assets/seed-icon.png" width="40">

## Seed Collapse

### [Storybook](https://vicdata4.github.io/seed-catalog/?path=/story/seed-catalog--collapse)

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components

Npm

```
npm install @seed-catalog/collapse
```

How to use

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from '@seed-catalog/styles';
import '@seed-catalog/collapse';
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
      <seed-collapse>
        <seed-dropdown position="absolute" maxWidth="300" rotate clickout>
          <button slot="button" class="sd-btn-mix red"><i class="material-icons">keyboard_arrow_down</i>Collapse</button>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
            eget viverra diam. Donec euismod mattis dignissim.
          </p>
        </seed-dropdown>
      </seed-collapse>
    `;
  }
}
```

Link: https://www.npmjs.com/package/@seed-catalog/collapse