(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{211:function(t,e,o){"use strict";o.r(e),o.d(e,"pageInit",(function(){return d}));var n=o(213),l=o.n(n),d=(o(214),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),function(){var menu=document.querySelector(".menu-bar");menu&&menu.classList.remove("show"),document.querySelector(".section-container").scrollTo({top:0,behavior:"smooth"}),l.a.highlightAll()})},224:function(t,e,o){"use strict";var n=o(212);class l extends n.a{static get styles(){return[n.b`
        :host {
          overflow: hidden;
          --modal-content-padding: 0.8rem 1rem;
          --modal-content-background: white;
        }

        .modal {
          display: flex;
          justify-content: center;

          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;

          background-color: transparent;
          color: black;
          overflow: auto;

          z-index: 999;
          transition: all 0.3s;
        }

        .modal-content {
          background-color: var(--modal-content-background);
          width: 95%;
          margin-top: -50px;
          transition: margin 0.3s;
        }

        .content {
          display: block;
        }

        .closed {
          display: none;
          background-color: transparent;
        }

        .header::slotted(*) {
          padding: var(--modal-content-padding);
        }

        .footer::slotted(*) {
          padding: var(--modal-content-padding);
        }

        .content {
          padding: var(--modal-content-padding);
        }

        .close {
          height: fit-content;
        }

        .title {
          font-weight: bold;
        }

        .modal-content div p {
          margin: 0 !important;
        }

        @media (min-width: ${Object(n.d)("768px")}) {
          .modal-content {
            width: 80%;
          }
        }

        @media (min-width: ${Object(n.d)("1025px")}) {
          .modal-content {
            width: 70%;
          }
        }

        @media (min-width: ${Object(n.d)("1280px")}) {
          .modal-content {
            width: 50%;
          }
        }
      `]}static get properties(){return{modalBackground:{type:String},centered:{type:Boolean},hideClickOut:{type:Boolean,attribute:"hide-click-out"},noStyles:{type:Boolean,attribute:"no-styles"}}}constructor(){super(),this.modalBackground="rgba(0, 0, 0, .4)",this.centered=!1,this.hideClickOut=!1,this.noStyles=!1}openModal(){this.modal.className="modal",setTimeout((()=>{this.modal.style.backgroundColor=this.modalBackground,this.shadowRoot.querySelector(".modal-content").style.marginTop="20px"}),10)}closeModal(){this.modal.style.backgroundColor="transparent",this.modal.style.opacity="0",this.shadowRoot.querySelector(".modal-content").style.marginTop="-50px",setTimeout((()=>{this.modal.className="modal closed",this.modal.style.opacity="1"}),300)}modalClickListener(){const content=this.shadowRoot.querySelector(".modal-content");this.modal.addEventListener("click",(function(t){t.target===this&&(this.style.opacity="0",this.style.backgroundColor="transparent",content.style.marginTop="-50px",setTimeout((()=>{this.className="modal closed",this.style.opacity="1"}),300))}))}async waitUntilSlottedButton(slot){slot.assignedElements()[0]&&(await slot.assignedElements()[0].updateComplete,slot.assignedElements().forEach((element=>{element.querySelector(".close")&&element.querySelector(".close").addEventListener("click",this.closeModal.bind(this))})))}async closeModalSlottedButton(){const footer=this.shadowRoot.querySelector('slot[name="footer"]'),header=this.shadowRoot.querySelector('slot[name="header"]');await this.waitUntilSlottedButton(footer),await this.waitUntilSlottedButton(header)}async firstUpdated(){this.modal=this.shadowRoot.querySelector(".modal"),this.hideClickOut||this.modalClickListener(),this.closeModalSlottedButton(),this.noStyles&&(this.style.setProperty("--modal-content-padding","0"),this.style.setProperty("--modal-content-background","transparent"))}render(){return n.c`
      <slot name="button" @click="${this.openModal}"></slot>
      <div class="modal closed" style="align-items: ${this.centered?"center":"flex-start"}">
        <div class="modal-content">
          <slot name="header" class="header"></slot>
          <slot name="content" class="content"></slot>
          <slot name="footer" class="footer"></slot>
        </div>
      </div>
    `}}window.customElements.define("seed-modal",l)},241:function(t,e,o){"use strict";o.r(e);o(224);var n=o(211),l={layout:"seed",mounted:function(){Object(n.pageInit)()}},d=o(11),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"title"},[t._v("Quick Start")]),t._v(" "),o("p",{staticClass:"info-text mb",attrs:{tabindex:"0"}},[t._v("\n    Before we start using this library, it is important to know the most important aspects about web components.\n  ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),o("p",{staticClass:"info-text mb",attrs:{tabindex:"0"}},[t._v("\n    Now you are ready to start using this library, so follow the next steps to know how to install and import a seed catalog component via npm:\n  ")]),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Install via npm")]),t._v(" "),o("pre",[o("code",{staticClass:"language-bash"},[t._v(t._s("npm i @seed-catalog/modal"))])]),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Import")]),t._v(" "),o("pre",[o("code",{staticClass:"language-js"},[t._v(t._s("import '@seed-catalog/modal';"))])]),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Add to your html template")]),t._v(" "),t._m(3),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Result")]),t._v(" "),o("seed-modal",[o("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("Default Modal")]),t._v(" "),o("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),o("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"close"},[t._v("Close modal")])])]),t._v(" "),o("seed-modal",{attrs:{centered:""}},[o("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("Centered Modal")]),t._v(" "),o("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),o("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"close"},[t._v("Close modal")])])]),t._v(" "),o("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("\n    Learn more about seed-modal\n    "),o("NuxtLink",{attrs:{id:"buttons",to:"/seed/modal"}},[t._v("here")])],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"info-text",attrs:{tabindex:"0"}},[t._v("\n    Web components are a set of web platform APIs that allow you to create new "),o("i",[t._v("custom")]),t._v(", "),o("i",[t._v("reusable")]),t._v(", "),o("i",[t._v("encapsulated")]),t._v(" "),o("b",[t._v("HTML tags")]),t._v(" to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and "),o("b",[t._v("can be used with any JavaScript library or framework")]),t._v(" that works with HTML.\n  ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"info-text",attrs:{tabindex:"0"}},[o("b",[t._v("Web components")]),t._v(" are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.\n  ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"info-text mb",attrs:{tabindex:"0"}},[t._v("\n    If you want to learn more about web components specifications, please follow this "),o("a",{attrs:{id:"buttons",href:"https://www.webcomponents.org/introduction",target:"_blank"}},[t._v("link")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",{staticClass:"line-numbers language-markup"},[o("code",[t._v("<seed-modal>")]),t._v("\n  "),o("code",[t._v('<button slot="button">')]),t._v("Open modal"),o("code",[t._v("</button>")]),t._v("\n  "),o("code",[t._v('<div slot="header">')]),t._v("\n    "),o("code",[t._v('<button class="close">')]),t._v("Close modal"),o("code",[t._v("</button>")]),t._v("\n  "),o("code",[t._v("</div>")]),t._v("\n  "),o("code",[t._v('<div slot="content">')]),t._v("\n    ...\n  "),o("code",[t._v("</div>")]),t._v("\n  "),o("code",[t._v('<div slot="footer">')]),t._v("\n    "),o("code",[t._v('<button class="close">')]),t._v("Close modal"),o("code",[t._v("</button>")]),t._v("\n  "),o("code",[t._v("</div>")]),t._v("\n"),o("code",[t._v("</seed-modal>")]),t._v("\n")])}],!1,null,null,null);e.default=component.exports}}]);