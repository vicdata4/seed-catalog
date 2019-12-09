import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';
import carousel1 from '../assets/images/carousel_1.jpg';
import carousel2 from '../assets/images/carousel_2.jpg';
import carousel3 from '../assets/images/carousel_3.jpg';
import carousel4 from '../assets/images/carousel_4.jpg';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}
            seed-carousel > div {
                color: white;
            }

            .due-card {
                display: flex;
                flex-flow: row wrap;
            }
        </style>
        
        <button class="sd-btn-mix black title"><i class="material-icons red">settings_overscan</i>Carousel</button>
        <button class="sd-btn black title">Carousel mobile touch</button>
        <seed-carousel arrows stepper>
            <div class="black">Black</div> 
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="green">Green</div>    
        </seed-carousel>

        <p class="package">
    <span class="purp">import</span> { <span class="light-txt">LitElement</span>, <span class="light-txt">html</span>, <span class="light-txt">css</span></span> } <span class="purp">from</span> <span class="ora">'lit-element'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/carousel.js</span>';

    <span class="blu">class</span> <span class="gree">MyComponent</span> <span class="blu">extends</span> <span class="gree">LitElement</span> {
      <span class="blu">static get</span> <span class="yellou">styles</span>() {
        <span class="purp">return</span> [
          <span class="yellou">css</span>\`
            <span class="yellou">.custom-class</span> {
                ...
            }
          \`
        ];
      }

      <span class="yellou">render</span>() {
        <span class="purp">return</span> <span class="yellou">html</span>\`
          <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">arrows stepper</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Carousel 1<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Carousel 2<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Carousel 3<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"custom-class"</span><span class="gre">></span>Carousel 4<span class="gre">${`</`}</span><span class="blu">div</span><span class="gre">></span>
          <span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        \`;
      }
    }
        
        </p>


        
        <button class="sd-btn black title">Carousel combinations</button>
        <div class="due-card">
            <seed-carousel class="card" stepper>
                <div class="green-mate">Green mate</div>      
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
            </seed-carousel>
            <seed-carousel class="card" arrows stepper>
                <div class="red-mate">Red</div>
                <div class="green">Green</div>
                <div class="black">Black</div>
                <div class="purple">Purple</div>
                <div class="orange">Orange</div>      
            </seed-carousel>
        </div>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">stepper</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">arrows stepper</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
        <div class="due-card">
            <seed-carousel class="card" stepper square>
                <div class="green">Green</div>      
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
            </seed-carousel>
            <seed-carousel class="card" arrows stepper square>
                <div class="black">Black</div>
                <div class="green">Green</div>
                <div class="red">Red</div>
                <div class="purple">Purple</div>
                <div class="orange">Orange</div>      
            </seed-carousel>
        </div>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">stepper square</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">arrows stepper square</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
        <div class="due-card">
            <seed-carousel class="card" stepper>
                <div class="blue">Blue</div>
                <div class="purple">Purple</div>
                <div class="green-mate">Green mate</div>      
            </seed-carousel>
            <seed-carousel class="card" arrows>
                <div class="purple">Purple</div>
                <div class="red-mate">Red</div>
                <div class="green">Green</div>
                <div class="black">Black</div>
                <div class="orange">Orange</div>      
            </seed-carousel>
        </div>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">stepper</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">arrows</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
        <div class="due-card">
        </div>
        <button class="sd-btn black title">Carousel with images</button>
        <seed-carousel arrows stepper>
            <img src="${carousel3}" alt="carousel3">
            <img src="${carousel1}" alt="carousel1">
            <img src="${carousel2}" alt="carousel2">
            <img src="${carousel4}" alt="carousel4">  
        </seed-carousel>
        <p class="package">
    <span class="purp">import</span> { <span class="light-txt">LitElement</span>, <span class="light-txt">html</span>, <span class="light-txt">css</span></span> } <span class="purp">from</span> <span class="ora">'lit-element'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/carousel.js</span>';

    <span class="blu">class</span> <span class="gree">MyComponent</span> <span class="blu">extends</span> <span class="gree">LitElement</span> {

      <span class="yellou">render</span>() {
        <span class="purp">return</span> <span class="yellou">html</span>\`
          <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">arrows stepper square</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">img </span><span class="light-txt">src</span>=<span class="ora">"assets/carousel1.jpg"</span> <span class="light-txt">alt</span>=<span class="ora">"carousel1"</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">img </span><span class="light-txt">src</span>=<span class="ora">"assets/carousel2.jpg"</span> <span class="light-txt">alt</span>=<span class="ora">"carousel2"</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">img </span><span class="light-txt">src</span>=<span class="ora">"assets/carousel3.jpg"</span> <span class="light-txt">alt</span>=<span class="ora">"carousel3"</span><span class="gre">></span>
            <span class="gre"><</span><span class="blu">img </span><span class="light-txt">src</span>=<span class="ora">"assets/carousel4.jpg"</span> <span class="light-txt">alt</span>=<span class="ora">"carousel4"</span><span class="gre">></span>
          <span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        \`;
      }
    }
        
        </p>
        <button class="sd-btn black title">Carousel auto</button>
        <seed-carousel auto stepper>
            <div class="green">Green</div>
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="purple">Purple</div>
            <div class="orange">Orange</div>      
        </seed-carousel>
        <p class="package">
    <span class="gre"><</span><span class="blu">seed-carousel </span><span class="light-txt">auto stepper</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">seed-carousel</span><span class="gre">></span>
        </p>
    `);
