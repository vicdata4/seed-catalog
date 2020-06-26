![](https://cdn.jsdelivr.net/gh/vicdata4/seed-catalog/packages/utils/logo.png?v=4&s=100)

## Seed Catalog ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.com)

Seed-catalog is a free and open-source `web-components library`. It contains CSS-styles and standards-based web templates such as buttons, modals, dropdowns and other interface components.

### [Dependencies](package.json)

- [LitElement](https://lit-element.polymer-project.org) Web Components
- [Storybook](https://storybook.js.org) WC Interface (dev)
- [ESLint](https://eslint.org) Coding style (dev)
- [Open-wc](https://open-wc.org/) Testing recommendations (Karma, Mocha, Chai)


## Quick start

Copy-paste the script near the end of your pages, right before the closing `</body>` tag.

```js
<script src="http://cdn.jsdelivr.net/gh/vicdata4/seed-catalog/dist/seed-bundle.min.js"></script>
```

  Or add as dependency to your `package.json`

```js
"dependencies": {
    ...
    "seed-catalog": "git://github.com/vicdata4/seed-catalog.git"
}
```

### Run Storybook

`git clone https://github.com/vicdata4/seed-catalog.git`

`npm install`

`npm run storybook`

### Run tests

`npm run test`

Karma coverage

## Styles

- [Button](https://seed-catalog.com/?path=/story/seed-style--button)
- [Button Group](https://seed-catalog.com/?path=/story/seed-style--button-group)
- [Button Icon](https://seed-catalog.com/?path=/story/seed-style--button-icon)
- [Button Input](https://seed-catalog.com/?path=/story/seed-style--button-input)


## Catalog

- [Carousel](https://seed-catalog.com/?path=/story/seed-catalog--carousel)
- [Collapse](https://seed-catalog.com/?path=/story/seed-catalog--collapse)
- [Dropdown](https://seed-catalog.com/?path=/story/seed-catalog--dropdown)
- [Modal](https://seed-catalog.com/?path=/story/seed-catalog--modal)
- [Progress ring](https://seed-catalog.com/?path=/story/seed-catalog--progress-ring)
- [Spinner](https://seed-catalog.com/?path=/story/seed-catalog--spinner)
- [Stepper](https://seed-catalog.com/?path=/story/seed-catalog--stepper)
- [Video Player](https://seed-catalog.com/?path=/story/seed-catalog--video-player)

## Style classes

#### Buttons

You can play with different combinations of colors, types and sizes according with the requirements of your application or website.

- [Material Icons](https://material.io/resources/icons) Crafted symbols

Material icons is integrated as dependency of this class, so you can create more complex and dynamic buttons, easy and fast just importing `seedStyle` class.

```js

import { LitElement, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/dropdown.js';

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

We recommend to see the [storybook documentation](https://seed-catalog.com) to learn more about seed-components catalog and how to use them.