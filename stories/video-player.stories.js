import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import '../packages/video-player/seed-video-player';

storiesOf('Seed Catalog', module)
  .add('Video Player', () => html`
     <style>
        ${seedStyle}
        ${storyCommonStyles}
        ${cssTemplateColors}

        .small-video {
            display: flex;
            flex-direction: column;
        }

        .small-video > seed-video-player {
            margin-top: 5px;
        }

        @media (min-width: 600px) {
            
            .small-video {
                margin-top: 0px;
                flex-direction: row;
                justify-content: center;
            }

            .small-video > seed-video-player {
                margin: 0 3px;
            }
        }

        @media (min-width: 1200px) {
            .medium-video {
                width: 60%;
                display: grid;
            }
        }
    </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Video Player</button>
        <br>
        <br>
        <p class="package">
  <span class="gre"><</span><span class="blu">seed-video-player </span><span class="light-txt">src</span>=<span class="ora">"https://url.to/download-file.mp4"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-video-player</span><span class="gre">></span>
        </p>
        <p class="package">
  <span class="gre"><</span><span class="blu">seed-video-player </span><span class="light-txt">src</span>=<span class="ora">"https://url.to/download-file.mp4"</span> <span class="light-txt">autoplay</span> <span class="light-txt">mute</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-video-player</span><span class="gre">></span>
        </p>
        <div class="medium-video">
            <seed-video-player src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4">
            </seed-video-player>
        </div>
        <p class="package">
  <span class="gre"><</span><span class="blu">seed-video-player </span><span class="light-txt">src</span>=<span class="ora">"https://url.to/download-file.mp4"</span><span class="gre">></span> <span class="light-txt">color</span>=<span class="ora">"#2f9dec"</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-video-player</span><span class="gre">></span>
        </p>
        
        <div class="small-video">
            <seed-video-player src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4" color="#2f9dec"></seed-video-player>
            <seed-video-player src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4" color="#d58309"></seed-video-player>
        </div>
      
    `);
