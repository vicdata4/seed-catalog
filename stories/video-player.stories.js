import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../video-player';

storiesOf('Seed Catalog', module)
  .add('Video Player', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}

            .small-video {
                width: 50%;
                margin-top: 100px;
            }

        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Video Player</button>
        <br>
        <br>
        <p class="package">
  <span class="gre"><</span><span class="blu">seed-video-player </span><span class="light-txt">src</span>=<span class="ora">"https://url.to/download-file.mp4"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-video-player</span><span class="gre">></span>
        </p>

        <seed-video-player src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4">
        </seed-video-player>
        
        <div class="small-video">
            <seed-video-player src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4"></seed-video-player>
        </div>
      
    `);
