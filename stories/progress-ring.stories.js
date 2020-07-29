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

      .custom-box {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .custom-title {
        color: white;
        margin-bottom: 10px;
      }
    </style>

    <button class="sd-btn-mix black title"><i class="material-icons blue">panorama_fish_eye</i>Progress ring</button>
    <br><br>
        <p class="package">
    <span class="gree">Examples</span>

    <span class="gre"><</span><span class="blu">seed-progress-ring</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"20"</span> <span class="light-txt">text</span>=<span class="ora">"%"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"20"</span> <span class="light-txt">custom</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">div</span> <span class="light-txt">slot</span>=<span class="ora">"custom"</span><span class="gre">></span>
        ...
      <span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
    <span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"70"</span> <span class="light-txt">text</span>=<span class="ora">"Uploading"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt">.percent</span>=<span class="ora">"10"</span> <span class="light-txt">text</span>=<span class="ora">"Uploading"</span> <span class="light-txt">only-text</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>
    
    <span class="gree">Optional attributes: ringColor / ringBackground / background / textColor</span>

    <span class="gre"><</span><span class="blu">seed-progress-ring </span><span class="light-txt"><br>      .percent</span>=<span class="ora">"20"</span><br>      </span><span class="light-txt">ringColor</span>=<span class="ora">"#f70bdd"</span><br>      </span><span class="light-txt">ringBackground</span>=<span class="ora">"rgba(0, 0, 0, 0.3)"</span><br>      </span><span class="light-txt">background</span>=<span class="ora">"grey"</span><span class="gre">></span><br>    <span class="gre">${`</`}</span><span class="blu">seed-progress-ring</span><span class="gre">></span>
        </p>
        <div>
            <seed-progress-ring></seed-progress-ring>
            <seed-progress-ring .percent="${20}" ringColor="#de3d4c" text="%" custom>
              <div class="custom-box" slot="custom">
                <span class="custom-title">Custom content</span>
                <svg width="30" height="7.5" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                begin="0s" dur="0.8s"
                                values="15;9;15" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                                begin="0s" dur="0.8s"
                                values="1;.5;1" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate attributeName="r" from="9" to="9"
                                begin="0s" dur="0.8s"
                                values="9;15;9" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                                begin="0s" dur="0.8s"
                                values=".5;1;.5" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                                begin="0s" dur="0.8s"
                                values="15;9;15" calcMode="linear"
                                repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                                begin="0s" dur="0.8s"
                                values="1;.5;1" calcMode="linear"
                                repeatCount="indefinite" />
                    </circle>
                </svg>
              </div>
            </seed-progress-ring>
            <seed-progress-ring .percent="${40}" ringColor="#3f76b6" text="%"></seed-progress-ring>
            <seed-progress-ring .percent="${60}" ringColor="#22ac41"></seed-progress-ring>
            <seed-progress-ring .percent="${80}" ringColor="#e6af0e" text="Uploading" only-text></seed-progress-ring>
            <seed-progress-ring .percent="${100}"></seed-progress-ring>
        </div> 
    `);
