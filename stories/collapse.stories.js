import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import { seedStyle } from '../packages/styles';
import '../packages/dropdown';
import '../packages/collapse';

storiesOf('Seed Catalog', module)
  .add('Collapse', () => html`
    <style>
        ${seedStyle}
        ${storyCommonStyles}
        ${cssTemplateColors}
    </style>

    <button class="sd-btn-mix black title"><i class="material-icons purple">keyboard_arrow_down</i>Collapse</button>
    <br><br>
    <seed-collapse>
      <seed-dropdown position="absolute" maxWidth="300" rotate clickout>
        <button id="paragrapx" slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse absolute</button>
        <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
        </p>
      </seed-dropdown>
    </seed-collapse>
        <p class="package">
    <span class="purp">import</span> { <span class="light-txt">LitElement</span>, <span class="light-txt">html</span>, <span class="light-txt">css</span></span> } <span class="purp">from</span> <span class="ora">'lit-element'</span>;
    <span class="purp">import</span> { <span class="light-txt">seedStyle</span> } <span class="purp">from</span> <span class="ora">'seed-catalog/styles.js'</span>;
    <span class="purp">import</span> <span class="ora">'@seed-catalog/collapse.js</span>';
    <span class="purp">import</span> <span class="ora">'@seed-catalog/dropdown.js</span>';

    <span class="blu">class</span> <span class="gree">MyComponent</span> <span class="blu">extends</span> <span class="gree">LitElement</span> {
       <span class="blu">static get</span> <span class="yellou">styles</span>() {
         <span class="purp">return</span> [
           <span class="light-txt">seedStyle</span>,
           <span class="yellou">css</span>\`
             ...
          \`
       ];
     }

      <span class="yellou">render</span>() {
        <span class="purp">return</span> <span class="yellou">html</span>\`
          <span class="gre"><</span><span class="blu">seed-collapse</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">position</span>=<span class="ora">"absolute"</span> <span class="light-txt">maxWidth</span>=<span class="ora">"300"</span> <span class="light-txt">rotate clickout</span><span class="gre">></span>
                <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix red"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Collapse<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
                <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
                    eget viverra diam. Donec euismod mattis dignissim.
                <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
            <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
          <span class="gre">${`</`}</span><span class="blu">seed-collapse</span><span class="gre">></span>
        \`;
      }
    }
        
        </p>
        <seed-collapse>
            <seed-dropdown maxWidth="300" rotate>
                <button id="paragrap" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">keyboard_arrow_down</i>Collapse relative</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-collapse</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">maxWidth</span>=<span class="ora">"300" </span><span class="light-txt">rotate</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-collapse</span><span class="gre">></span>
        </p>
        <seed-collapse>
            <seed-dropdown>
                <button id="paragrapx" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">keyboard_arrow_down</i>Default Collapse</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-collapse</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-collapse</span><span class="gre">></span>
        </p>
        <!--
        <seed-collapse>
            <seed-dropdown>
                <button id="zlol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown>
                <button id="zlock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown>
                <button id="zdrot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown>
                <button id="zlops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Accordion 4</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
        -->
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-collapse</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 1<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
           eget viverra diam. Donec euismod mattis dignissim.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 2<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
           eget viverra diam. Donec euismod mattis dignissim.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 3<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
           eget viverra diam. Donec euismod mattis dignissim.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_down<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Accordion 4<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
           eget viverra diam. Donec euismod mattis dignissim.
        <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-collapse</span><span class="gre">></span>

</p>
        <seed-collapse basic>
            <seed-dropdown>
                <button id="zlol" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Basic mode 1</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown>
                <button id="zlock" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Basic mode 2</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown>
                <button id="zdrot" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Basic mode 3</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
            <seed-dropdown>
                <button id="zlops" slot="button" class="sd-btn-mix black"><i class="material-icons">keyboard_arrow_down</i>Basic mode 4</button>
                <p slot="content" class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam, eget viverra diam. Donec euismod mattis dignissim. Fusce convallis lacus enim, eget ultricies neque tristique vel. Fusce vehicula, elit id ultrices dignissim, nibh mauris feugiat justo, a fermentum velit diam at enim.
                </p>
            </seed-dropdown>
        </seed-collapse>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-collapse</span> <span class="light-txt">basic</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-collapse</span><span class="gre">></span>
        </p>
    `);
