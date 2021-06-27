(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{211:function(t,e,r){"use strict";r.r(e),r.d(e,"pageInit",(function(){return c}));var o=r(213),n=r.n(o),c=(r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),function(){document.querySelector(".section-container").scrollTo({top:0,behavior:"smooth"}),n.a.highlightAll()})},225:function(t,e,r){"use strict";var o=r(212);class n extends o.a{static get styles(){return[o.b`
        :host {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-flow: row nowrap;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .dot {
          width: 15px;
          height: 15px;
          margin: 5px;
          border-radius: 100%;
          border: none;
          cursor: pointer;
          transition: background-color .7s;
          padding: initial;
        }

        .square {
          margin: 0;
          border-radius: unset;
        }
      `]}static get properties(){return{index:{type:Number},array:{type:Array,attribute:!1},size:{type:Number},square:{type:Boolean},colorActive:{type:String},colorBack:{type:String}}}constructor(){super(),this.index=0,this.square=!1,this.array=[],this.colorBack=this.colorBack||"rgba(255,255,255,.5)",this.colorActive=this.colorActive||"white",this.size=0}setPosition(t){this.dispatchEvent(new CustomEvent("set-selected-step",{detail:t,composed:!0,bubbles:!0}))}attributeChangedCallback(t,e,r){super.connectedCallback(),"index"===t&&(this.index=parseInt(r)),"size"===t&&(this.size=parseInt(r)),"coloractive"===t&&(this.colorActive=r),"colorback"===t&&(this.colorBack=r)}async firstUpdated(){await this.parentNode.updateComplete,this.array=new Array(this.parentNode.length||this.size).fill("")}render(){return o.c`
      ${this.array.map(((t,i)=>o.c`
        <button
          class="dot${this.square?" square":""}"
          @click="${()=>this.setPosition(i)}" id="${`a${i}`}"
          .style="background-color: ${i===this.index?this.colorActive||"white":this.colorBack}"
          aria-label="${i}"
          tabindex="${i}"
        ></button>
      `))}
    `}}window.customElements.define("seed-stepper",n)},226:function(t,e,r){var content=r(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("476cdb47",content,!0,{sourceMap:!1})},230:function(t,e,r){(function(e){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,h=d||v||Function("return this")(),f=Object.prototype.toString,m=Math.max,_=Math.min,x=function(){return h.Date.now()};function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var d=n.test(t);return d||c.test(t)?l(t.slice(2),d?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,r){var o,n,c,l,d,v,h=0,f=!1,C=!1,k=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function E(time){var e=o,r=n;return o=n=void 0,h=time,l=t.apply(r,e)}function S(time){return h=time,d=setTimeout(j,e),f?E(time):l}function $(time){var t=time-v;return void 0===v||t>=e||t<0||C&&time-h>=c}function j(){var time=x();if($(time))return W(time);d=setTimeout(j,function(time){var t=e-(time-v);return C?_(t,c-(time-h)):t}(time))}function W(time){return d=void 0,k&&o?E(time):(o=n=void 0,l)}function A(){var time=x(),t=$(time);if(o=arguments,n=this,v=time,t){if(void 0===d)return S(v);if(C)return d=setTimeout(j,e),E(v)}return void 0===d&&(d=setTimeout(j,e)),l}return e=y(e)||0,w(r)&&(f=!!r.leading,c=(C="maxWait"in r)?m(y(r.maxWait)||0,e):c,k="trailing"in r?!!r.trailing:k),A.cancel=function(){void 0!==d&&clearTimeout(d),h=0,o=v=n=d=void 0},A.flush=function(){return void 0===d?l:W(x())},A}}).call(this,r(30))},231:function(t,e,r){"use strict";r(226)},232:function(t,e,r){var o=r(34)(!1);o.push([t.i,"seed-carousel>img[data-v-182f5fe4]{width:100%}.card[data-v-182f5fe4]{min-width:328px;height:530px}.bl-u[data-v-182f5fe4]{background-color:#43aad7}.oran-g[data-v-182f5fe4]{background-color:#e18b46}.gre-e[data-v-182f5fe4]{background-color:#5dbe59}.purp-l[data-v-182f5fe4]{background-color:#b250b2}@media screen and (min-width:768px){.carousel-container[data-v-182f5fe4]{max-width:500px}}",""]),t.exports=o},239:function(t,e,r){"use strict";r.r(e);var o=r(212),n=r(230),c=r.n(n);class l extends o.a{static get styles(){return[o.b`
        .container {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;

          overflow-x: scroll;
          overflow-y: hidden;

          scroll-behavior: smooth;

          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }

        ::slotted(*) {
          scroll-snap-align: center;
        }

        ::slotted(img) {
          height: intrinsic;
        }

        .container::-webkit-scrollbar {
          display: none;
        }

        @media screen and (min-width: ${Object(o.d)("768px")}) {}
      `]}static get properties(){return{index:{type:Number,attribute:!1},length:{type:Number,attribute:!1},speed:{type:Number}}}constructor(){super(),this.index=0,this.length=0,this.speed=200}getCarouselParams(){const t=this.shadowRoot.querySelector("slot:not([name])").assignedElements()[0].clientWidth,e=this.shadowRoot.querySelector(".container"),{clientWidth:r,scrollLeft:o,scrollWidth:n}=e;return{clientWidth:r,cardWidth:t,scrollLeft:o,marginLeft:(r-t)/2,scrollWidth:n}}smoothScroll(t,e){const r=e-t,o=this.speed;let n=null;const c=this.shadowRoot.querySelector(".container"),l=function(e){n||(n=e);const progress=e-n;c.scrollTo(r*progress/o+t,0),progress<o&&window.requestAnimationFrame(l)};window.requestAnimationFrame(l)}setIndexWhenScrolling(){const{scrollLeft:t,cardWidth:e,marginLeft:r,scrollWidth:o,clientWidth:n}=this.getCarouselParams();this.index=Math.round((t+r)/e),2*e<n&&(0===t&&(this.index=0),o-n===t&&(this.index=this.length-1));const c=this.shadowRoot.querySelector("slot[name=stepper]").assignedElements()[0];c&&(c.index=this.index)}setPositionByIndex(t){const{scrollLeft:e,cardWidth:r,marginLeft:o}=this.getCarouselParams();if(this.index!==t){this.index=t;const n=r*this.index-o;this.smoothScroll(e,n)}}async waitUntilSlotRendering(){this.shadowRoot.querySelector("slot:not([name])").assignedElements()[0].updateComplete}disconnectedCallback(){this.shadowRoot.querySelector(".container").removeEventListener("scroll",this.setIndexWhenScrolling),super.disconnectedCallback()}async firstUpdated(){this.length=this.shadowRoot.querySelector("slot:not([name])").assignedElements().length,await this.waitUntilSlotRendering(),this.shadowRoot.querySelector(".container").addEventListener("scroll",c()(this.setIndexWhenScrolling.bind(this),5)),this.addEventListener("set-selected-step",(t=>{this.setPositionByIndex(t.detail)}))}render(){return o.c` 
      <div class="container">
        <slot></slot>
      </div>
      <slot name="stepper"></slot>
    `}}window.customElements.define("seed-carousel",l);r(225);var d=r(211),v={layout:"seed",mounted:function(){Object(d.pageInit)()}},h=(r(231),r(11)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title"},[t._v("Carousel")]),t._v(" "),t._m(0),t._v(" "),r("pre",[r("code",{staticClass:"language-bash"},[t._v(t._s("npm i @seed-catalog/carousel"))])]),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Import")]),t._v(" "),r("pre",[r("code",{staticClass:"language-js"},[t._v(t._s("import '@seed-catalog/carousel';"))])]),t._v(" "),r("p",{staticClass:"info-text sm mt",attrs:{tabindex:"0"}},[t._v("Properties and attributes")]),t._v(" "),t._m(1),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Custom")]),t._v(" "),t._m(4),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Examples")]),t._v(" "),r("seed-carousel",[r("img",{attrs:{src:"https://source.unsplash.com/1600x900/?random",alt:"carousel3"}}),t._v(" "),r("img",{attrs:{src:"https://source.unsplash.com/1600x900/?nature",alt:"carousel1"}}),t._v(" "),r("img",{attrs:{src:"https://source.unsplash.com/1600x900/?water",alt:"carousel2"}}),t._v(" "),r("img",{attrs:{src:"https://source.unsplash.com/1600x900/?nature,water",alt:"carousel4"}}),t._v(" "),r("seed-stepper",{attrs:{slot:"stepper",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"},slot:"stepper"})],1),t._v(" "),r("div",{staticClass:"carousel-container"},[r("seed-carousel",[r("div",{staticClass:"card bl-u"}),t._v(" "),r("div",{staticClass:"card oran-g"}),t._v(" "),r("div",{staticClass:"card gre-e"}),t._v(" "),r("div",{staticClass:"card purp-l"}),t._v(" "),r("seed-stepper",{attrs:{slot:"stepper",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"},slot:"stepper"})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Install via "),r("a",{attrs:{href:"https://www.npmjs.com/package/@seed-catalog/carousel",target:"_blank"}},[t._v("npm")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb"},[r("p",{staticClass:"info-text sm"},[r("span",{staticClass:"prop-light"},[t._v("speed")]),t._v(": type Number\n    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"line-numbers language-markup"},[r("code",[t._v("<seed-carousel>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 1"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 2"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 3"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 4"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 5"),r("code",[t._v("</div>")]),t._v("\n"),r("code",[t._v("</seed-carousel>")]),t._v("\n")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"line-numbers language-markup"},[r("code",[t._v("<seed-carousel>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 1"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 2"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v("<div>")]),t._v("Card 3"),r("code",[t._v("</div>")]),t._v("\n  "),r("code",[t._v('<seed-stepper slot="stepper">')]),r("code",[t._v("</seed-stepper>")]),t._v("\n"),r("code",[t._v("</seed-carousel>")]),t._v("\n")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"line-numbers language-markup"},[r("code",[t._v('<seed-carousel speed="${1000}">')]),r("code",[t._v("</seed-carousel>")]),t._v("\n")])}],!1,null,"182f5fe4",null);e.default=component.exports}}]);