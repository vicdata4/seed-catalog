import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../packages/styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../packages/progress-ring';

storiesOf('Seed Catalog', module)
  .add('Progress Ring', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}
      ${cssTemplateColors}
    </style>

    <button class="sd-btn-mix black title"><i class="material-icons blue">panorama_fish_eye</i>Progress ring</button>
    <br><br>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-progress-ring</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"20"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"20"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">span</span> <span class="light-txt">slot</span>=<span class="ora">"text"</span><span class="gre">></span>%<span class="gre">${`</`}</span><span class="blu">span</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"20"</span> <span class="light-txt">only-text</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">span</span> <span class="light-txt">slot</span>=<span class="ora">"text"</span><span class="gre">></span>%<span class="gre">${`</`}</span><span class="blu">span</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>
    
    <span class="gree">Optional attributes: ringColor / ringBackground / background / textColor</span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt"><br>      .percent</span>=<span class="ora">"20"</span><br>      </span><span class="light-txt">ringColor</span>=<span class="ora">"#f70bdd"</span><br>      </span><span class="light-txt">ringBackground</span>=<span class="ora">"rgba(0, 0, 0, 0.3)"</span><br>      </span><span class="light-txt">background</span>=<span class="ora">"grey"</span><span class="gre">></span><br>    <span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>
        </p>
        <div>
            <seed-progress-ring></seed-progress-ring>
            <seed-progress-ring .percent="${20}" ringColor="#de3d4c"><span slot="text">%</span></seed-progress-ring>
            <seed-progress-ring .percent="${40}" ringColor="#3f76b6"></seed-progress-ring>
            <seed-progress-ring .percent="${60}" ringColor="#22ac41"></seed-progress-ring>
            <seed-progress-ring .percent="${80}" ringColor="#e6af0e" only-text><span slot="text">Uploading</span></seed-progress-ring>
            <seed-progress-ring .percent="${100}"></seed-progress-ring>
        </div> 
    `);
