<img src="https://cdn.jsdelivr.net/gh/vicdata4/doc-template/assets/seed-icon.png" width="40">

## Seed Catalog

![npm](https://img.shields.io/badge/npm-v1.1.0-blue.svg)
![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)

### [Website](https://vicdata4.github.io/seed-catalog)

Seed-catalog is an open-source `web-components library`. It contains CSS-styles and standards-based web templates such as buttons, modals, dropdowns and other interface components.

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components
- [Storybook](https://storybook.js.org) WC Interface (dev)
- [ESLint](https://eslint.org) Coding style (dev)
- [Open-wc](https://open-wc.org/) Testing recommendations (Karma, Mocha, Chai)


## Quick start

Add as dependency to your `package.json`

```js
"dependencies": {
    ...
    "@seed-catalog/carousel": "1.0.3"
}
```

## Styles

- [Button]()
- [Button Group]()
- [Button Icon]()
- [Button Input]()


## Catalog

- [Carousel](https://vicdata4.github.io/seed-catalog/seed/carousel)
- [Dropdown](https://vicdata4.github.io/seed-catalog/seed/dropdown)
- [Modal](https://vicdata4.github.io/seed-catalog/seed/modal)
- [Progress ring](https://vicdata4.github.io/seed-catalog/seed/ring)
- [Stepper](https://vicdata4.github.io/seed-catalog/seed/stepper)

## Style classes

#### Buttons

You can play with different combinations of colors, types and sizes according with the requirements of your application or website.

- [Material Icons](https://material.io/resources/icons) Crafted symbols

Material icons is integrated as dependency of this class, so you can create more complex and dynamic buttons, easy and fast just importing `seedStyle` class.

```js

import { LitElement, css } from 'lit-element';
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
            <seed-dropdown maxWidth="300" clickout>
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

##### Color classes:
- ![](https://placehold.it/15/de3d4c/000000?text=+) `.red`
- ![](https://placehold.it/15/22ac41/000000?text=+) `.green`
- ![](https://placehold.it/15/2dabb4/000000?text=+) `.blue`
- ![](https://placehold.it/15/e6af0e/000000?text=+) `.yellow`
- ![](https://placehold.it/15/903e8d/000000?text=+) `.purple`
- ![](https://placehold.it/15/2f2d2d/000000?text=+) `.black`
- ![](https://placehold.it/15/d58309/000000?text=+) `.orange`
- ![](https://placehold.it/15/bf4545/000000?text=+) `.red-mate`
- ![](https://placehold.it/15/1C8281/000000?text=+) `.green-mate`
- ![](https://placehold.it/15/3f76b6/000000?text=+) `.blue-mate`
- ![](https://placehold.it/15/fff/000000?text=+) `default`

##### Button classes

- .sd-btn
- .sd-btn-mix
- .sd-btn-mixr
- .sd-btn-group
- .sd-icon
- .clear
- .circle
- .sm
- .lg

##### Input classes

- .sd-input-submit
- .sd-input-icon
- .sd-input-icon left
- .sd-input-label


##### Fonts

- Material icons
- Ubuntu, sans-serif



### How to use

We recommend to see the [storybook documentation](https://vicdata4.github.io/seed-catalog) to learn more about seed-components catalog and how to use them.