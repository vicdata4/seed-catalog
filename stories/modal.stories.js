import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import '../components/seed-modal';

storiesOf('Seed Catalog', module)
  .add('Modal', () => html`
        <style>
            ${seedStyle}
        </style>
  
        <seed-modal>
          <button slot="button" class="sd-btn-mix red"><i class="material-icons">people</i>Open modal</button>
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
    `);
