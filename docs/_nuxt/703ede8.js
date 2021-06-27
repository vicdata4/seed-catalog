(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4],{211:function(t,o,e){"use strict";e.r(o),e.d(o,"pageInit",(function(){return d}));var l=e(213),n=e.n(l),d=(e(214),e(215),e(216),e(217),e(218),e(219),e(220),e(221),e(222),e(223),function(){var menu=document.querySelector(".menu-bar");menu&&menu.classList.remove("show"),document.querySelector(".section-container").scrollTo({top:0,behavior:"smooth"}),n.a.highlightAll()})},224:function(t,o,e){"use strict";var l=e(212);class n extends l.a{static get styles(){return[l.b`
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

        @media (min-width: ${Object(l.d)("768px")}) {
          .modal-content {
            width: 80%;
          }
        }

        @media (min-width: ${Object(l.d)("1025px")}) {
          .modal-content {
            width: 70%;
          }
        }

        @media (min-width: ${Object(l.d)("1280px")}) {
          .modal-content {
            width: 50%;
          }
        }
      `]}static get properties(){return{modalBackground:{type:String},centered:{type:Boolean},hideClickOut:{type:Boolean,attribute:"hide-click-out"},noStyles:{type:Boolean,attribute:"no-styles"}}}constructor(){super(),this.modalBackground="rgba(0, 0, 0, .4)",this.centered=!1,this.hideClickOut=!1,this.noStyles=!1}openModal(){this.modal.className="modal",setTimeout((()=>{this.modal.style.backgroundColor=this.modalBackground,this.shadowRoot.querySelector(".modal-content").style.marginTop="20px"}),10)}closeModal(){this.modal.style.backgroundColor="transparent",this.modal.style.opacity="0",this.shadowRoot.querySelector(".modal-content").style.marginTop="-50px",setTimeout((()=>{this.modal.className="modal closed",this.modal.style.opacity="1"}),300)}modalClickListener(){const content=this.shadowRoot.querySelector(".modal-content");this.modal.addEventListener("click",(function(t){t.target===this&&(this.style.opacity="0",this.style.backgroundColor="transparent",content.style.marginTop="-50px",setTimeout((()=>{this.className="modal closed",this.style.opacity="1"}),300))}))}async waitUntilSlottedButton(slot){slot.assignedElements()[0]&&(await slot.assignedElements()[0].updateComplete,slot.assignedElements().forEach((element=>{element.querySelector(".close")&&element.querySelector(".close").addEventListener("click",this.closeModal.bind(this))})))}async closeModalSlottedButton(){const footer=this.shadowRoot.querySelector('slot[name="footer"]'),header=this.shadowRoot.querySelector('slot[name="header"]');await this.waitUntilSlottedButton(footer),await this.waitUntilSlottedButton(header)}async firstUpdated(){this.modal=this.shadowRoot.querySelector(".modal"),this.hideClickOut||this.modalClickListener(),this.closeModalSlottedButton(),this.noStyles&&(this.style.setProperty("--modal-content-padding","0"),this.style.setProperty("--modal-content-background","transparent"))}render(){return l.c`
      <slot name="button" @click="${this.openModal}"></slot>
      <div class="modal closed" style="align-items: ${this.centered?"center":"flex-start"}">
        <div class="modal-content">
          <slot name="header" class="header"></slot>
          <slot name="content" class="content"></slot>
          <slot name="footer" class="footer"></slot>
        </div>
      </div>
    `}}window.customElements.define("seed-modal",n)},243:function(t,o,e){"use strict";e.r(o);e(224);var l=e(211),n={layout:"seed",mounted:function(){Object(l.pageInit)()}},d=e(11),component=Object(d.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h1",{staticClass:"title"},[t._v("Modal")]),t._v(" "),t._m(0),t._v(" "),e("pre",[e("code",{staticClass:"language-bash"},[t._v(t._s("npm i @seed-catalog/modal"))])]),t._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Import")]),t._v(" "),e("pre",[e("code",{staticClass:"language-js"},[t._v(t._s("import '@seed-catalog/modal';"))])]),t._v(" "),e("p",{staticClass:"info-text sm mt",attrs:{tabindex:"0"}},[t._v("Properties and attributes")]),t._v(" "),t._m(1),t._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Custom")]),t._v(" "),t._m(3),t._v(" "),e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Examples")]),t._v(" "),e("seed-modal",[e("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("Default Modal")]),t._v(" "),e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"close"},[t._v("Close modal")])])]),t._v(" "),e("seed-modal",{attrs:{centered:""}},[e("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("Centered Modal")]),t._v(" "),e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"close"},[t._v("Close modal")])])]),t._v(" "),e("seed-modal",{attrs:{"hide-click-out":""}},[e("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("Hide clickout")]),t._v(" "),e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"close"},[t._v("Close modal")])])]),t._v(" "),e("seed-modal",{attrs:{"no-styles":""}},[e("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("No styles")]),t._v(" "),e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"close"},[t._v("Close modal")])])]),t._v(" "),e("seed-modal",{attrs:{modalBackground:"#44849cb5"}},[e("button",{staticClass:"sd-btn blue",attrs:{slot:"button"},slot:"button"},[t._v("Modal background")]),t._v(" "),e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("button",{staticClass:"close"},[t._v("Close modal")])]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    ")]),t._v(" "),e("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"close"},[t._v("Close modal")])])])],1)}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"info-text sm",attrs:{tabindex:"0"}},[t._v("Install via "),e("a",{attrs:{href:"https://www.npmjs.com/package/@seed-catalog/modal",target:"_blank"}},[t._v("npm")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mb"},[e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[t._v("hide-click-out")]),t._v(": type Boolean")]),t._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[t._v("no-styles")]),t._v(": type Boolean")]),t._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[t._v("centered")]),t._v(": type Boolean")]),t._v(" "),e("p",{staticClass:"info-text sm"},[e("span",{staticClass:"prop-light"},[t._v("modalBackground")]),t._v(": type String")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("pre",{staticClass:"line-numbers language-markup"},[e("code",[t._v("<seed-modal>")]),t._v("\n  "),e("code",[t._v('<button slot="button">')]),t._v("Open modal"),e("code",[t._v("</button>")]),t._v("\n  "),e("code",[t._v('<div slot="header">')]),t._v("\n    "),e("code",[t._v('<button class="close">')]),t._v("Close modal"),e("code",[t._v("</button>")]),t._v("\n  "),e("code",[t._v("</div>")]),t._v("\n  "),e("code",[t._v('<div slot="content">')]),t._v("\n    ...\n  "),e("code",[t._v("</div>")]),t._v("\n  "),e("code",[t._v('<div slot="footer">')]),t._v("\n    "),e("code",[t._v('<button class="close">')]),t._v("Close modal"),e("code",[t._v("</button>")]),t._v("\n  "),e("code",[t._v("</div>")]),t._v("\n"),e("code",[t._v("</seed-modal>")]),t._v("\n")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("pre",{staticClass:"line-numbers language-markup"},[e("code",[t._v('<seed-modal hide-click-out centered no-styles modalBackground="green">')]),e("code",[t._v("</seed-modal>")]),t._v("\n")])}],!1,null,null,null);o.default=component.exports}}]);