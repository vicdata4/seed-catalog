import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import { seedStyle } from '../styles';
import '../dropdown';

storiesOf('Seed Catalog', module)
  .add('Dropdown', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}
      ${cssTemplateColors}
    </style>

    <button class="sd-btn-mix black title"><i class="material-icons blue-mate">keyboard_arrow_down</i>Dropdown</button>
    <br><br>
    <seed-dropdown position="relative">
        <button id="lorem" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">local_library</i>Dropdown relative</button>
        <p slot="content" class="content">
        Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
        </p>
    </seed-dropdown>
        <p class="package">
    <span class="purp">import</span> { <span class="light-txt">LitElement</span>, <span class="light-txt">html</span>, <span class="light-txt">css</span></span> } <span class="purp">from</span> <span class="ora">'lit-element'</span>;
    <span class="purp">import</span> { <span class="light-txt">seedStyle</span> } <span class="purp">from</span> <span class="ora">'seed-catalog/styles.js'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/dropdown.js</span>';

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
          <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">position</span>=<span class="ora">"relative"</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn red"</span><span class="gre">></span>Dropdown<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">p </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
              eget viverra diam. Donec euismod mattis dignissim.
            <span class="gre">${`</`}</span><span class="blu">p</span><span class="gre">></span>
          <span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        \`;
      }
    }
    </p>
        <seed-dropdown clickout>
            <button id="loremv" slot="button" class="sd-btn-mix blue"><i class="material-icons">local_library</i>Dropdown absolute (default)</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">clickout</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        </p>
        <seed-dropdown rotate clickout>
            <button id="restaurant" slot="button" class="sd-btn-mix green-mate"><i class="material-icons">arrow_drop_down</i>Menu</button>
            <div slot="content" class="dropdown-links">
                <a href="/">Select type</a>
                <a href="/"><i class="material-icons green-mate sm">fastfood</i>Burgers</a>
                <a href="/"><i class="material-icons green-mate sm">local_dining</i>Salads</a>
                <a href="/"><i class="material-icons green-mate sm">local_cafe</i>Desserts</a>
                <a href="/"><i class="material-icons red sm">local_bar</i>Drinks</a>
            </div>
        </seed-dropdown>    

        <seed-dropdown maxWidth="300" clickout>
            <button id="lorem" slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">local_library</i>Dropdown Width</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>

        <seed-dropdown clickout>
            <button id="menu" slot="button" class="sd-btn-mix green">Dropdown Links</button>
            <div slot="content" class="content dropdown-links">
                <a href="/"><i class="material-icons blue-mate sm">home</i>Home</a>
                <a href="/"><i class="material-icons blue-mate sm">info</i>About us</a>
                <a href="/"><i class="material-icons blue-mate sm">web</i>Products</a>
                <a href="/"><i class="material-icons blue-mate sm">shop</i>Shop</a>
                <a href="/"><i class="material-icons blue-mate sm">contact_mail</i>Contact</a>
            </div>
        </seed-dropdown>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">rotate clickout</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        </p>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">clickout</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        </p>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-dropdown </span><span class="light-txt">maxWidth</span>=<span class="ora">"300"</span> <span class="light-txt">clickout</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-dropdown</span><span class="gre">></span>
        </p>
    `);
