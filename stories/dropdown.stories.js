import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { storyCommonStyles } from '../.storybook/common-styles';
import { codeGenerator, dropdownContent } from '../.storybook/code-template';
import { seedStyle } from '../styles';
import '../dropdown';

storiesOf('Seed Catalog', module)
  .add('Dropdown', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
        </style>

        <button class="sd-btn-mix black title"><i class="material-icons blue-mate">keyboard_arrow_down</i>Dropdown</button>
        <br><br>
        <seed-dropdown position="relative">
            <button id="lorem" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">local_library</i>Dropdown relative</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>
        <p class="tags-container">${codeGenerator(`<seed-dropdown position="relative">`, `</seed-dropdown>`, dropdownContent())}</p>
        <seed-dropdown clickout>
            <button id="loremv" slot="button" class="sd-btn-mix blue"><i class="material-icons">local_library</i>Dropdown absolute (default)</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>
        <p class="tags-container">${codeGenerator(`<seed-dropdown clickout>`, `</seed-dropdown>`, dropdownContent())}</p>
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
        <p class="tags-container">${codeGenerator(`<seed-dropdown rotate clickout>`, `</seed-dropdown>`, dropdownContent())}</p>
        <p class="tags-container">${codeGenerator(`<seed-dropdown maxWidth="300" clickout>`, `</seed-dropdown>`, dropdownContent())}</p>
        <p class="tags-container">${codeGenerator(`<seed-dropdown clickout>`, `</seed-dropdown>`, dropdownContent())}</p>
    `);
