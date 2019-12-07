import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import { storyCommonStyles } from '../.storybook/common-styles';
import '../dropdown';
import '../accordion';
import '../collapse';

storiesOf('Seed Catalog', module)
  .add('Accordion', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }

            .title {
                width: 100%;
                text-align: left;
            }

            html {
                --seed-color-blue: #2dabb4;
                --seed-color-blue-focus: #2dabb445;
                --seed-color-blue-hover: #239aa3;

                --seed-color-black: #2f2d2d;
                --seed-color-black-focus: #43434387;
                --seed-color-black-hover: #434343;
            }

            ${storyCommonStyles}
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons blue">menu</i>Accordion (optional)</button>
        <p class="tags-container" style="overflow:hidden;white-space: unset;"><span><span class="light-txt">Accordion is just a seed-collapse syntax-wrapper. This component gives you the possibility of using a more descriptive accordion-tag instead of seed-collapse but anyway the behaviour is exactly the same.</span></span></p>
        <seed-accordion>
            <seed-dropdown rotate>
                <button id="lol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown rotate>
                <button id="lock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown rotate>
                <button id="drot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown rotate>
                <button id="lops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 4</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-accordion>
        <p class="tags-container"><span><span class="light-txt">${`<seed-accordion>`}</span>
        ${`<seed-dropdown>
            <button id="drop1" slot="button" class="sd-btn black">Collapse 1</button>
            <p slot="content">Lorem ipsum dolor sit amet</p>
        </seed-dropdown>
        <seed-dropdown>
            <button id="drop2" slot="button" class="sd-btn black">Collapse 2</button>
            <p slot="content">Lorem ipsum dolor sit amet</p>
        </seed-dropdown>
        <seed-dropdown>
            <button id="drop3" slot="button" class="sd-btn black">Collapse 3</button>
            <p slot="content">Lorem ipsum dolor sit amet</p>
        </seed-dropdown>
        <seed-dropdown>
            <button id="drop4" slot="button" class="sd-btn black">Collapse 4</button>
            <p slot="content">Lorem ipsum dolor sit amet</p>
        </seed-dropdown>`}
<span class="light-txt">${`</seed-accordion>`}</span></span>
        </p>
    `);
