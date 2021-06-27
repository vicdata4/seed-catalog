(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{211:function(t,e,r){"use strict";r.r(e),r.d(e,"pageInit",(function(){return c}));var o=r(213),n=r.n(o),c=(r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),function(){document.querySelector(".section-container").scrollTo({top:0,behavior:"smooth"}),n.a.highlightAll()})},225:function(t,e,r){"use strict";var o=r(212);class n extends o.a{static get styles(){return[o.b`
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
    `}}window.customElements.define("seed-stepper",n)},227:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("287fb8ae",content,!0,{sourceMap:!1})},233:function(t,e,r){"use strict";r(227)},234:function(t,e,r){var o=r(34)(!1);o.push([t.i,"seed-stepper[data-v-224379fa]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}",""]),t.exports=o},244:function(t,e,r){"use strict";r.r(e);r(225);var o=r(211),n={layout:"seed",mounted:function(){Object(o.pageInit)()}},c=(r(233),r(11)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title"},[t._v("Stepper")]),t._v(" "),t._m(0),t._v(" "),r("pre",[r("code",{staticClass:"language-bash"},[t._v(t._s("npm i @seed-catalog/stepper"))])]),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Import")]),t._v(" "),r("pre",[r("code",{staticClass:"language-js"},[t._v(t._s("import '@seed-catalog/stepper';"))])]),t._v(" "),r("p",{staticClass:"info-text sm mt",attrs:{tabindex:"0"}},[t._v("Properties and attributes")]),t._v(" "),t._m(1),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Custom")]),t._v(" "),t._m(3),t._v(" "),r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Examples")]),t._v(" "),r("seed-stepper",{attrs:{index:"0",size:"5",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"}}),t._v(" "),r("seed-stepper",{attrs:{index:"1",size:"5",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"}}),t._v(" "),r("seed-stepper",{attrs:{index:"2",size:"5",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"}}),t._v(" "),r("seed-stepper",{attrs:{index:"3",size:"5",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"}}),t._v(" "),r("seed-stepper",{attrs:{index:"4",size:"5",colorActive:"#5e5e5e",colorBack:"#a9aaaa45"}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Install via "),r("a",{attrs:{href:"https://www.npmjs.com/package/@seed-catalog/stepper",target:"_blank"}},[t._v("npm")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb"},[r("p",{staticClass:"info-text sm"},[r("span",{staticClass:"prop-light"},[t._v("index")]),t._v(": type Number")]),t._v(" "),r("p",{staticClass:"info-text sm"},[r("span",{staticClass:"prop-light"},[t._v("size")]),t._v(": type Number")]),t._v(" "),r("p",{staticClass:"info-text sm"},[r("span",{staticClass:"prop-light"},[t._v("colorActive")]),t._v(": type String")]),t._v(" "),r("p",{staticClass:"info-text sm"},[r("span",{staticClass:"prop-light"},[t._v("colorBack")]),t._v(": type String")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"line-numbers language-markup"},[r("code",[t._v('<seed-stepper index="1" size="5">')]),r("code",[t._v("</seed-stepper>")]),t._v("\n")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"line-numbers language-markup"},[r("code",[t._v('<seed-stepper index="1" size="5" colorActive="#5e5e5e" colorBack="#a9aaaa45">')]),r("code",[t._v("</seed-stepper>")]),t._v("\n")])}],!1,null,"224379fa",null);e.default=component.exports}}]);