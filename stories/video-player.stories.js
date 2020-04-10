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
        <seed-video-player src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4">
        </seed-video-player>
        
        <div class="small-video">
            <seed-video-player src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4"></seed-video-player>
        </div>
      
    `);
