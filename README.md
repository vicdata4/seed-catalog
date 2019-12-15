![](logo.png?v=4&s=100)

## Seed Catalog ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.web.app)

Seed-catalog is a free and open-source `web-components library`. It contains CSS-styles and standard-web based templates such as buttons, modals, dropdowns and other interface components.

### [Dependencies](package.json)

- [Storybook](https://storybook.js.org) WC Interface (dev)
- [LitElement](https://lit-element.polymer-project.org) Web Components
- [ESLint](https://eslint.org) Coding style (dev)


###  Add as project dependency (98kb)

from `package.json`

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

## Catalog

- [Accordion](#accordion)
- [Seed Style](#button-classes)
- [Carousel](#carousel)
- [Collapse](#collapse)
- [Dropdown](#dropdown)
- [Modal](#modal)
- [Stepper](#stepper)

## Style classes

#### Buttons

You can play with different combinations of colors, types and sizes according with the requirements of your application or website.

- [Material Icons](https://material.io/resources/icons) Crafted symbols

Material icons is integrated as dependency of this class, so you can create more complex and dynamic buttons, easy and fast just importing `seedStyle` class.

```js
// example using lit-element
// import styles.js file

import { LitElement, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';

class MyComponent extends LitElement {
    static get styles() {
        return [
            seedStyle,
            css`
                /** your css **/
            `
        ];
    }

    render() {
        return html`
            <button class="sd-btn red">Red</button>
            <button class="sd-btn black sm">Black</button>
            <button class="sd-btn blue-mate">Submit</button>
            <button class="sd-btn purple">Purple</button>
            <button class="sd-btn-mix blue"><i class="material-icons">folder</i>Folder</button>
            <button class="sd-btn-mixr blue">Profile<i class="material-icons">face</i></button>
            <button class="sd-icon red"><i class="material-icons">folder</i></button>
            <button class="sd-icon circle red"><i class="material-icons">face</i></button>
            <button class="sd-icon circle blue sm"><i class="material-icons">lock</i></button>
            <button class="sd-icon lg green"><i class="material-icons">face</i></button>
            <i class="material-icons green">home</i>
            <i class="material-icons blue sm">face</i>
            <i class="material-icons red-mate">cloud</i>
        `;
    }
}
```

### Classes

##### buttons: `sd-btn`, `sd-btn-mix`, `sd-btn-mixr`, `sd-icon`, `circle`, `sd-icon clear`

##### dropdown: `dropdown-links`

##### color:
- ![](https://placehold.it/15/de3d4c/000000?text=+) `red`
- ![](https://placehold.it/15/22ac41/000000?text=+) `green`
- ![](https://placehold.it/15/2dabb4/000000?text=+) `blue`
- ![](https://placehold.it/15/e6af0e/000000?text=+) `yellow`
- ![](https://placehold.it/15/903e8d/000000?text=+) `purple`
- ![](https://placehold.it/15/2f2d2d/000000?text=+) `black`
- ![](https://placehold.it/15/d58309/000000?text=+) `orange`
- ![](https://placehold.it/15/bf4545/000000?text=+) `red-mate`
- ![](https://placehold.it/15/1C8281/000000?text=+) `green-mate`
- ![](https://placehold.it/15/3f76b6/000000?text=+) `blue-mate`
- ![](https://placehold.it/15/fff/000000?text=+) `default`
##### size: `sm`, `lg`

### How to use it

## Carousel

Options

- `arrows`
- `stepper`
- `auto`
- `square`
- `speed` Number ej .3  .7  1  2
- `interval` Number milliseconds ej 2000

## Collapse

Options (ptional)

- `speed` String
- `accordion` attribute

## Dropdown

Options

- `backgroundColor` String
- `rotate` String
- `position` String
- `collapse` attribute
- `clickout` attribute
- `maxWidth` String
- `speed` String

## Modal

Options

- `modalBackground` String
- `alignWindow` String

## Stepper

Options

- `index` Number
- `size` Number


