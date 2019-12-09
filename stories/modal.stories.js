import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

import { seedStyle } from '../styles';
import '../modal';

storiesOf('Seed Catalog', module)
  .add('Modal', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons yellow">web_asset</i>Modal</button>
        <br><br>
        <seed-modal>
          <button slot="button" class="sd-btn-mix blue"><i class="material-icons">people</i>Open modal</button>
          <button slot="close-btn" class="sd-icon clear"><i class="material-icons blue-mate">close</i></button>
          <span slot="title">Building Web Components</span>
          
          <div slot="content">
            Duis sit amet sollicitudin nulla, sit amet molestie magna. Aenean interdum justo id iaculis hendrerit. Nullam sed tellus pretium, mattis dui vitae, placerat diam. <br><br>Nulla faucibus lacus sed mauris facilisis, a condimentum risus lobortis. Nunc egestas vehicula libero, non condimentum enim semper in. Donec efficitur convallis felis nec malesuada. Morbi ornare massa diam, ac ultrices magna suscipit a. Integer tempus sagittis ligula, ut fermentum magna suscipit a. Sed pellentesque consequat velit, ut convallis tellus. Mauris eget felis tortor. Aliquam sed consectetur ipsum. Praesent vel tortor consectetur sem mollis tincidunt vitae nec purus. Nullam ac scelerisque est, vitae iaculis magna. Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn black">Close</button>
            <button class="sd-btn blue-mate">Send</button>
          </div> 
        </seed-modal>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-modal</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"button" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix blue"</span><span class="gre">></span>Open Modal<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">slot</span>=<span class="ora">"close-btn" </span><span class="light-txt">class</span>=<span class="ora">"sd-icon clear"</span><span class="gre">></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons blue-mate"</span><span class="gre">></span>close<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">span </span><span class="light-txt">slot</span>=<span class="ora">"title"</span><span class="gre">></span>Building Web Components<span class="gre">${`</`}</span><span class="blu">span</span><span class="gre">></span>

      <span class="gre"><</span><span class="blu">div </span><span class="light-txt">slot</span>=<span class="ora">"content"</span><span class="gre">></span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">div </span><span class="light-txt">slot</span>=<span class="ora">"footer"</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn black"</span><span class="gre">></span>Close<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue-mate"</span><span class="gre">></span>Send<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-modal</span><span class="gre">></span>
        </p>
        <seed-modal alignWindow="center">
          <button slot="button" class="sd-btn-mix blue-mate"><i class="material-icons">lock</i>Centered modal</button>
          <button slot="close-btn" class="sd-icon clear"><i class="material-icons red-mate">close</i></button>
          <span slot="title">Building Web Components</span>
          
          <div slot="content">
            Ut pellentesque, enim lobortis pellentesque egestas, libero nibh sodales sapien, eu dignissim tortor massa id neque. Ut at dui viverra, efficitur lectus sed, sagittis risus.
          </div>
          <div slot="footer">
            <button class="sd-btn green-mate">Ok</button>
            <button class="sd-btn red-mate">Deny</button>
          </div> 
        </seed-modal>

        <p class="package">
    <span class="gre"><</span><span class="blu">seed-modal</span> <span class="light-txt">alignWindow</span>=<span class="ora">"center"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-modal</span><span class="gre">></span>
        </p>
    `);
