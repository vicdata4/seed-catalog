(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4],{211:function(r,t,e){"use strict";e.r(t),e.d(t,"pageInit",(function(){return l}));var n=e(213),o=e.n(n),l=(e(214),e(215),e(216),e(217),e(218),e(219),e(220),e(221),e(222),e(223),function(){document.querySelector(".section-container").scrollTo({top:0,behavior:"smooth"}),o.a.highlightAll()})},240:function(r,t,e){"use strict";e.r(t);var n=e(212);class o extends n.a{static get styles(){return[n.b`
        :host {
            --progress-ring-color: #f70bdd;
            --progress-ring-background: #404040;
            --ring-background: transparent;
            --progress-ring-transition: stroke-dashoffset .5s linear;
            --progress-ring-radius: 90px;
            --progress-ring-width: 10px;
            --progress-ring-long: calc(2 * 3.14 * var(--progress-ring-radius));

            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .upload-progress-container {
            display: none;
        }

        .progress-ring {
            transform: rotate(-90deg);
        }
            
        .progress-ring circle {
            transition: var(--progress-ring-transition);
            stroke-width: var(--progress-ring-width);
        }

        .progress-ring-background {
            stroke-dashoffset: 0;
            stroke-dasharray: var(--progress-ring-long);
            stroke: var(--progress-ring-background);
            fill: var(--ring-background);
            r: var(--progress-ring-radius);
        }

        .progress-ring-bar {
            stroke-dashoffset: var(--progress-ring-long);
            stroke-dasharray: var(--progress-ring-long);
            stroke: var(--progress-ring-color);
            r: var(--progress-ring-radius);
        }

        .percent-progress-value {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }
      `]}static get properties(){return{percent:{type:Number,reflect:!0},onlyText:{type:Boolean,attribute:"only-text"},custom:{type:Boolean},ringColor:{type:String},ringBackground:{type:String},background:{type:String},textColor:{type:String},text:{type:String}}}constructor(){super(),this.percent=0,this.ringColor=null,this.ringBackground=null,this.background=null,this.textColor="white",this.onlyText=!1,this.text="",this.custom=!1}setPercent(r){const t=6.28*parseFloat(getComputedStyle(this).getPropertyValue("--progress-ring-radius")),e=t-r*t/100;this.uploadPercent=r,this.shadowRoot.querySelector(".progress-ring-bar").style.strokeDashoffset=e}attributeChangedCallback(r,t,e){super.attributeChangedCallback(r,t,e),"percent"===r&&e<=100&&this.shadowRoot.querySelector(".progress-ring-bar")&&this.setPercent(e)}firstUpdated(){this.ringColor&&this.style.setProperty("--progress-ring-color",this.ringColor),this.ringBackground&&this.style.setProperty("--progress-ring-background",this.ringBackground),this.background&&this.style.setProperty("--ring-background",this.background),this.setPercent(this.percent)}render(){return n.c`
      <svg class="progress-ring" width="200" height="200" viewPort="0 0 100 100" version="1.1">
        <circle class="progress-ring-background" cx="100" cy="100"></circle>
        <circle class="progress-ring-bar" cx="100" cy="100" fill="transparent"></circle>
      </svg>
      <div class="percent-progress-value">
        ${this.custom?n.c`
          <slot name="custom"></slot>
        `:n.c`
          <div class="percent-value" .style="color: ${this.textColor}">
            ${this.onlyText?"":this.percent}${this.text}
          </div>
        `}
      </div>
    `}}window.customElements.define("seed-progress-ring",o);var l=e(211),c={layout:"seed",mounted:function(){Object(l.pageInit)()}},d=e(11),component=Object(d.a)(c,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("h1",{staticClass:"title"},[r._v("Progress ring")]),r._v(" "),r._m(0),r._v(" "),e("pre",[e("code",{staticClass:"language-bash"},[r._v(r._s("npm i @seed-catalog/progress-ring"))])]),r._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[r._v("Import")]),r._v(" "),e("pre",[e("code",{staticClass:"language-js"},[r._v(r._s("import '@seed-catalog/progress-ring';"))])]),r._v(" "),e("p",{staticClass:"info-text sm mt",attrs:{tabindex:"0"}},[r._v("Properties and attributes")]),r._v(" "),r._m(1),r._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[r._v("Code")]),r._v(" "),r._m(2),r._v(" "),r._m(3),r._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[r._v("Custom")]),r._v(" "),r._m(4),r._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[r._v("Examples")]),r._v(" "),e("seed-progress-ring",{attrs:{percent:"0",textColor:"black",ringColor:"#20abf9",ringBackground:"rgba(0, 0, 0, 0.3)"}}),r._v(" "),e("seed-progress-ring",{attrs:{percent:"20",textColor:"black",ringColor:"#20abf9",ringBackground:"rgba(0, 0, 0, 0.3)"}}),r._v(" "),e("seed-progress-ring",{attrs:{percent:"50",textColor:"black",ringColor:"#20abf9",ringBackground:"rgba(0, 0, 0, 0.3)"}}),r._v(" "),e("seed-progress-ring",{attrs:{percent:"80",textColor:"black",ringColor:"#20abf9",ringBackground:"rgba(0, 0, 0, 0.3)"}}),r._v(" "),e("seed-progress-ring",{attrs:{percent:"100",textColor:"black",ringColor:"#20abf9",ringBackground:"rgba(0, 0, 0, 0.3)"}})],1)}),[function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[r._v("Install via "),e("a",{attrs:{href:"https://www.npmjs.com/package/@seed-catalog/progress-ring",target:"_blank"}},[r._v("npm")])])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"mb"},[e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("percent")]),r._v(": type Number")]),r._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("ringColor")]),r._v(": type String")]),r._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("text")]),r._v(": type String")]),r._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("ringColor")]),r._v(": type String")]),r._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("ringBackground")]),r._v(": type String")]),r._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("only-text")]),r._v(": type Boolean")]),r._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[r._v("custom")]),r._v(": type Boolean")])])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("pre",{staticClass:"line-numbers language-markup"},[e("code",[r._v('<seed-progress-ring percent="20" ringColor="#f70bdd">')]),e("code",[r._v("</seed-progress-ring>")]),r._v("\n")])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("pre",{staticClass:"line-numbers language-markup"},[e("code",[r._v("<seed-progress-ring custom>")]),r._v("\n  "),e("code",[r._v('<div slot="custom">')]),r._v("\n    ...\n  "),e("code",[r._v("</div>")]),r._v("\n"),e("code",[r._v("</seed-progress-ring>")]),r._v("\n")])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("pre",{staticClass:"line-numbers language-markup"},[e("code",[r._v('<seed-progress-ring\n  percent="20"\n  ringColor="#f70bdd"\n  text="Uploading"\n  ringBackground="rgba(0, 0, 0, 0.3)"\n  background="grey"\n  only-text\n>')]),e("code",[r._v("</seed-progress-ring>")]),r._v("\n")])}],!1,null,null,null);t.default=component.exports}}]);