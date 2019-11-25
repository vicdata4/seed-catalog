![](assets/logo_md.png?v=4&s=100)

## Seed Catalog ![#fff](https://placehold.it/15/fff/000000?text=+)![#bf4545](https://placehold.it/15/bf4545/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#1C8281](https://placehold.it/15/1C8281/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#903e8d](https://placehold.it/15/903e8d/000000?text=+)![#fff](https://placehold.it/15/fff/000000?text=+)![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+)

### [Storybook](https://seed-catalog.web.app)

Seed-catalog is a free and open-source `web-components library`. It contains CSS-styles and standard-web based templates such as buttons, modals, dropdowns and other interface components.


### [Dependencies](package.json)

- [Storybook](https://storybook.js.org) WC Interface
- [LitElement](https://lit-element.polymer-project.org) Web Components
- [ESLint](https://eslint.org) Coding style


###  Add as project dependency

`LitElement is required.`

from `package.json`

```js
"dependencies": {
    ...
    "lit-element": "^2.0.1",
    "seed-catalog": "git://github.com/vicdata4/seed-catalog.git"
}
```

### Run Storybook

`git clone https://github.com/vicdata4/seed-catalog.git`

`npm install`

`npm run storybook`

## Catalog

- [Button classes](#button-classes)
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

class MyClass extends LitElement {
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

##### buttons: `sd-btn`, `sd-btn-mix`, `sd-btn-mixr`, `sd-icon`, `circle`, `sd-btn-empty`

##### dropdown: `dropdown-links`

##### color:
- ![#de3d4c](https://placehold.it/15/de3d4c/000000?text=+) `red`
- ![#22ac41](https://placehold.it/15/22ac41/000000?text=+) `green`
- ![#2dabb4](https://placehold.it/15/2dabb4/000000?text=+) `blue`
- ![#e6af0e](https://placehold.it/15/e6af0e/000000?text=+) `yellow`
- ![#903e8d](https://placehold.it/15/903e8d/000000?text=+) `purple`
- ![#2f2d2d](https://placehold.it/15/2f2d2d/000000?text=+) `black`
- ![#d58309](https://placehold.it/15/d58309/000000?text=+) `orange`
- ![#bf4545](https://placehold.it/15/bf4545/000000?text=+) `red-mate`
- ![#1C8281](https://placehold.it/15/1C8281/000000?text=+) `green-mate`
- ![#3f76b6](https://placehold.it/15/3f76b6/000000?text=+) `blue-mate`
##### size: `sm`, `lg`

### How to use it

## Carousel

Options

- arrows
- stepper
- auto
- square
- speed (property Number) ej .3  .7  1  2
- interval (property Number) milliseconds ej 2000

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/carousel.js';

class MyClass extends LitElement {
    static get styles() {
        return [
            seedStyle
        ];
    }
    
    render() {
        return html`
            <seed-carousel arrows stepper>
                <div class="black">Black</div> 
                <div class="red">Red</div>
                <div class="blue">Blue</div>
                <div class="green">Green</div>    
            </seed-carousel>

            <seed-carousel stepper square>
                <div class="green">Green</div>      
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
            </seed-carousel>

            <seed-carousel auto>
                <div class="green">Green</div>      
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
            </seed-carousel>
        `;
    }
}
```

## Collapse

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/collapse.js';
import 'seed-catalog/dropdown.js';

class MyClass extends LitElement {
    static get styles() {
        return [
            seedStyle
        ];
    }
    
    render() {
        return html`
            <seed-collapse>
                <seed-dropdown collapse>
                    <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
                    <p slot="content" class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </seed-dropdown>
                <seed-dropdown collapse>
                    <button id="lock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
                    <p slot="content" class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </seed-dropdown>
                <seed-dropdown collapse>
                    <button id="drot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
                    <p slot="content" class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </seed-dropdown>
                <seed-dropdown collapse>
                    <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 4</button>
                    <p slot="content" class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </seed-dropdown>
            </seed-collapse>
        `;
    }
}
```

## Dropdown

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/dropdown.js';

class MyClass extends LitElement {
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
            <seed-dropdown rotate="true">
                <button id="restaurant" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">arrow_drop_down</i>Menu</button>
                <div slot="content" class="dropdown-links">
                    <a href="/">Select type</a>
                    <a href="/"><i class="material-icons green-mate sm">fastfood</i>Burgers</a>
                    <a href="/"><i class="material-icons green-mate sm">local_dining</i>Salads</a>
                    <a href="/"><i class="material-icons green-mate sm">local_cafe</i>Desserts</a>
                    <a href="/"><i class="material-icons red sm">local_bar</i>Drinks</a>
                </div>
            </seed-dropdown>

            <seed-dropdown maxWidth="300">
                <button id="lorem" slot="button" class="sd-btn-mix green"><i class="material-icons">local_library</i>Default dropdown</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam.
                </p>
            </seed-dropdown>
        `;
    }
}
```

## Modal

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/modal.js';

class MyClass extends LitElement {
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
            <seed-modal alignWindow="center">
                <button slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">lock</i>Open modal</button>
                <button slot="close-btn" class="sd-btn-empty"><i class="material-icons red-mate">close</i></button>
                <span slot="title">Building Web Components</span>
                
                <div slot="content">
                Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
                </div>
                <div slot="footer">
                <button class="sd-btn green-mate">Ok</button>
                <button class="sd-btn red-mate">Deny</button>
                </div> 
            </seed-modal>
        `;
    }
}
```

## Stepper

```js
import { LitElement, html, css } from 'lit-element';
import { seedStyle } from 'seed-catalog/styles.js';
import 'seed-catalog/stepper.js';

class MyClass extends LitElement {
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
            <seed-stepper .index="${2}" .nElements="${5}"></seed-stepper>
        `;
    }
}
```


