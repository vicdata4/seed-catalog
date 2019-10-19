import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedButtonStyle } from '../styles';

import '../components/seed-modal';

storiesOf('Seed Library', module)
  .add('Modal', () => html`
        <style>
            ${seedButtonStyle}
        </style>
  
        <seed-modal>
          <button slot="button" class="sd-btn-mix red"><i class="material-icons">people</i>Open modal</button>
          <div slot="header">
            <span>Building Web Components</span>
            <button class="sd-btn-empty"><i class="material-icons blue-mate">close</i></button>
          </div>
          <div slot="content">
            <p>Duis sit amet sollicitudin nulla, sit amet molestie magna. Aenean interdum justo id iaculis hendrerit. Nullam sed tellus pretium, mattis dui vitae, placerat diam. <br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus. Nullam ac scelerisque est, vitae iaculis magna. Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.</p>
          </div>
          <div slot="footer">
            <button class="sd-btn black">Close</button>
            <button class="sd-btn blue-mate">Send</button>
          </div> 
        </seed-modal>
    `);