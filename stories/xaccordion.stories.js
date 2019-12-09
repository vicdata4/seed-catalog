import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';

import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../dropdown';
import '../accordion';
import '../collapse';

storiesOf('Seed Catalog', module)
  .add('Accordion', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons blue">menu</i>Accordion (optional)</button>
        <p class="white-txt">Accordion is just a seed-collapse syntax-wrapper. This component gives you the possibility of using a more descriptive accordion-tag instead of seed-collapse but anyway the behaviour is exactly the same.</p>
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
        
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-accordion</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 1<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 2<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 3<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 4<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-accordion</span><span class="gre">></span>
        </p>
    `);
