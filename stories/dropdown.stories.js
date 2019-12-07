import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { storyCommonStyles } from '../.storybook/common-styles';

import { seedStyle } from '../styles';
import '../dropdown';

storiesOf('Seed Catalog', module)
  .add('Dropdown', () => html`
        <style>
            ${seedStyle}

            ${storyCommonStyles}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
            .dropdown-links > a {
                color: #483f3f;
                text-decoration: none;
                
                display: flex;
                align-items: center;
                padding: 8px;
                padding-left: 20px;
                padding-right: 50px;
            }

            .dropdown-links > a:hover {
                background-color: #f9f9f9;
            }

            .dropdown-links > a > i{
                margin-right: 15px;
            }

            .title {
                width: 100%;
                text-align: left;
            }

            .blue-mate {
                --seed-color-blue-mate: rgb(63, 118, 182);
                --seed-color-blue-mate-focus: #2dabb445;
                --seed-color-blue-mate-hover: rgb(53, 98, 149);
            }

            .black {
                --seed-color-black: #2f2d2d;
                --seed-color-black-focus: #43434387;
                --seed-color-black-hover: #434343;
            }
        </style>

        <button class="sd-btn-mix black title"><i class="material-icons blue-mate">keyboard_arrow_down</i>Dropdown</button>
        <br><br>
        <seed-dropdown position="relative">
            <button id="lorem" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">local_library</i>Dropdown relative</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>
        <p class="tags-container"><span><span class="light-txt">${`<seed-dropdown position="relative">`}</span>
        ${`<button id="lorem" slot="button" class="sd-btn-mix red-mate"><i class="material-icons">local_library</i>Dropdown relative</button>
        <p slot="content">Lorem ipsum dolor sit amet</p>`}
<span class="light-txt">${`</seed-dropdown>`}</span></span>
        </p>

        <seed-dropdown clickout>
            <button id="loremv" slot="button" class="sd-btn-mix blue"><i class="material-icons">local_library</i>Dropdown absolute (default)</button>
            <p slot="content" class="content">
            Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.[7][8][9] SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
            </p>
        </seed-dropdown>
        <p class="tags-container"><span><span class="light-txt">${`<seed-dropdown clickout>`}</span>
        ${`<button id="loremv" slot="button" class="sd-btn-mix blue"><i class="material-icons">local_library</i>Dropdown absolute (default)</button>
        <p slot="content">Lorem ipsum dolor sit amet</p>`}
<span class="light-txt">${`</seed-dropdown>`}</span></span>
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

        <p class="tags-container"><span><span class="light-txt">${`<seed-dropdown rotate clickout>`}</span>
        ${`<button id="menu" slot="button" class="sd-btn-mix blue"><i class="material-icons">local_library</i>Menu</button>
        <p slot="content">Lorem ipsum dolor sit amet</p>`}
<span class="light-txt">${`</seed-dropdown>`}</span></span>
        </p>
        <p class="tags-container"><span><span class="light-txt">${`<seed-dropdown maxWidth="300" clickout>`}</span>
        ${`<button id="width" slot="button" class="sd-btn-mix blue"><i class="material-icons">local_library</i>Dropdown width</button>
        <p slot="content">Lorem ipsum dolor sit amet</p>`}
<span class="light-txt">${`</seed-dropdown>`}</span></span>
        </p>
        </p>
        <p class="tags-container"><span><span class="light-txt">${`<seed-dropdown clickout>`}</span>
        ${`<button id="links" slot="button" class="sd-btn-mix blue">Dropdown links</button>
        <div slot="content" class="content dropdown-links">
            <a href="/"><i class="material-icons blue-mate sm">home</i>Home</a>
            <a href="/"><i class="material-icons blue-mate sm">info</i>About us</a>
            <a href="/"><i class="material-icons blue-mate sm">web</i>Products</a>
            <a href="/"><i class="material-icons blue-mate sm">shop</i>Shop</a>
        </div>`}
<span class="light-txt">${`</seed-dropdown>`}</span></span>
        </p>
    `);
