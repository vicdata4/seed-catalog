import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../spinner';
import { spinner } from '../components/utils/svg-icons';

storiesOf('Seed Catalog', module)
  .add('Spinner', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}
      ${cssTemplateColors}

      .bluex, .redx, .greenx {
        visibility: hidden;
      }

      p > span {
        margin: 10px;
        margin-left: 0;
        margin-right: 0;
      }
    </style>
        
    <button class="sd-btn-mix black title"><i class="material-icons orange">filter_tilt_shift</i>Spinner</button>
    <br><br>
    <button class="sd-btn blue" @click="${() => { document.querySelector('.bluex').style.visibility = 'visible'; }}">Show spinner</button>
    <button class="sd-btn red" @click="${() => { document.querySelector('.redx').style.visibility = 'visible'; }}">Show spinner</button>
    <button class="sd-btn green" @click="${() => { document.querySelector('.greenx').style.visibility = 'visible'; }}">Show spinner</button>
    <br><br>
    <seed-spinner
      class="bluex"
      color="var(--seed-color-blue)"
      background="#0d1314cf"
      @click="${() => { document.querySelector('.bluex').style.visibility = 'hidden'; }}">
      ${spinner}</seed-spinner>
    <seed-spinner
      class="redx"
      color="var(--seed-color-red)"
      @click="${() => { document.querySelector('.redx').style.visibility = 'hidden'; }}">
      ${spinner}</seed-spinner>
    <seed-spinner class="greenx" background="rgba(0, 0, 0, 0.2)" color="var(--seed-color-green)" @click="${() => { document.querySelector('.greenx').style.visibility = 'hidden'; }}">
      ${spinner}
    </seed-spinner>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-spinner</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">svg</span><span class="gre">></span>...<span class="gre"><</span><span class="gre">/</span><span class="blu">svg</span><span class="gre">></span>
    <span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">color</span>=<span class="ora">"var(--seed-color-blue)"</span> <span class="light-txt">background</span>=<span class="ora">"#0d1314cf"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">svg</span><span class="gre">></span>...<span class="gre"><</span><span class="gre">/</span><span class="blu">svg</span><span class="gre">></span>
    <span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">color</span>=<span class="ora">"#2dabb4"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">svg</span><span class="gre">></span>...<span class="gre"><</span><span class="gre">/</span><span class="blu">svg</span><span class="gre">></span>
    <span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">seed-spinner</span> <span class="light-txt">color</span>=<span class="ora">"rgb(255,255,255)"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">svg</span><span class="gre">></span>...<span class="gre"><</span><span class="gre">/</span><span class="blu">svg</span><span class="gre">></span>
    <span class="gre">${'</'}</span><span class="blu">seed-spinner</span><span class="gre">></span>
        </p>
    `);
