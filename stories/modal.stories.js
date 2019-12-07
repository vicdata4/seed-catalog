import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { storyCommonStyles } from '../.storybook/common-styles';

import { seedStyle } from '../styles';
import '../modal';

storiesOf('Seed Catalog', module)
  .add('Modal', () => html`
        <style>
            ${seedStyle}

            .title {
                width: 100%;
                text-align: left;
            }

            .yellow {
              --seed-color-yellow: #e6af0e;
              --seed-color-yellow-focus: #c89a0c3d;
              --seed-color-yellow-hover: #d5a927;
            }

            .black {
                --seed-color-black: #2f2d2d;
                --seed-color-black-focus: #43434387;
                --seed-color-black-hover: #434343;
            }

            ${storyCommonStyles}
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons yellow">web_asset</i>Modal</button>
        <br><br>
        <seed-modal>
          <button slot="button" class="sd-btn-mix blue"><i class="material-icons">people</i>Open modal</button>
          <button slot="close-btn" class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
          <span slot="title">Building Web Components</span>
          
          <div slot="content">
            Duis sit amet sollicitudin nulla, sit amet molestie magna. Aenean interdum justo id iaculis hendrerit. Nullam sed tellus pretium, mattis dui vitae, placerat diam. <br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus. Nullam ac scelerisque est, vitae iaculis magna. Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn black">Close</button>
            <button class="sd-btn blue-mate">Send</button>
          </div> 
        </seed-modal>
        <p class="tags-container"><span><span class="light-txt">${`<seed-modal>`}</span>
        ${`<button slot="button" class="sd-btn-mix blue"><i class="material-icons">people</i>Open modal</button>
        <button slot="close-btn" class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
        <span slot="title">Building Web Components</span>
          
        <div slot="content">
          Duis sit amet sollicitudin nulla, sit amet molestie magna.
        </div>
        <div slot="footer">
          <button class="sd-btn black">Close</button>
          <button class="sd-btn blue-mate">Send</button>
        </div>`}
<span class="light-txt">${`</seed-modal>`}</span></span>
        </p>

        <seed-modal alignWindow="center">
          <button slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">lock</i>Centered modal</button>
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
        <p class="tags-container"><span><span class="light-txt">${`<seed-modal alignWindow="center">`}</span>
        ${`<button slot="button" class="sd-btn-mix blue"><i class="material-icons">people</i>Open modal</button>
        <button slot="close-btn" class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
        <span slot="title">Building Web Components</span>
          
        <div slot="content">
          Duis sit amet sollicitudin nulla, sit amet molestie magna.
        </div>
        <div slot="footer">
          <button class="sd-btn black">Close</button>
          <button class="sd-btn blue-mate">Send</button>
        </div>`}
<span class="light-txt">${`</seed-modal>`}</span></span>
        </p>
    `);
