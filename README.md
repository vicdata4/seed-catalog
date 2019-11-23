![](assets/logo_md.png?v=4&s=100)

## Seed Catalog [Storybook](https://seed-catalog.web.app)

Seed-catalog is a free and open-source `web-components library`. It contains CSS-styles and standard-web based templates such as buttons, modals, dropdowns and other interface components.


### Dependencies:
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

## Button classes

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

#### classes: `sd-btn`, `sd-btn-mix`, `sd-btn-mixr`, `sd-icon`, `circle`, `sd-btn-empty`

#### colors: `red`, `green`, `blue`, `yellow`, `purple`, `black`, `orange`, `green-mate`, `red-mate`, `blue-mate`

#### size: `sm`, `lg`

## Carousel

```js
    // import seed-modal
    import 'seed-catalog/seed-carousel.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle
        ];
    }

    <seed-carousel arrows stepper>
        <div class="black">Black</div> 
        <div class="red">Red</div>
        <div class="blue">Blue</div>
        <div class="green">Green</div>    
    </seed-carousel>
```

## Collapse

```js
    // import seed-modal
    import 'seed-catalog/seed-collapse.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle
        ];
    }

    <seed-collapse>
        <seed-dropdown mode="collapse">
            <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 1</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam.
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse">
            <button id="lock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 2</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam.
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse">
            <button id="drot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 3</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam-
            </p>
        </seed-dropdown>
        <seed-dropdown mode="collapse">
            <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Collapse 4</button>
            <p slot="content" class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam.
            </p>
        </seed-dropdown>
    </seed-collapse>
```

## Dropdown

```js
    // import seed-dropdown
    import 'seed-catalog/seed-dropdown.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle,
            css`
                ...
            `
        ];
    }

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
```

## Modal

```js
    // import seed-modal
    import 'seed-catalog/seed-modal.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle,
            css`
                ...
            `
        ];
    }

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
```

## Stepper

```js
    // import seed-modal
    import 'seed-catalog/seed-stepper.js';
    // and combine with sd-btn class to improve your performance
    import { seedStyle } from 'seed-catalog/styles.js';

    // lit element example
    static get styles() {
        return [
            seedStyle,
            css`
                ...
            `
        ];
    }

    <seed-stepper .index="${2}" .nElements="${5}"></seed-stepper>
```


