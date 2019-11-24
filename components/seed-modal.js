import { LitElement, html, css } from 'lit-element';
import { seedStyle } from '../styles';

export class SeedModal extends LitElement {
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
          overflow: hidden;
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
          transition: all 0.3s;
          color: black;
          overflow: auto;

          z-index: 1;
        }

        .modal-content {
          background-color: white;
          width: 80%;
          transition: margin-top 0.3s;
          margin-top: -50px;
        }

        .content {
          display: block;
          padding: 0.8rem 1rem;
        }

        .closed {
          display: none;
          background-color: transparent;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #dedede;
          padding: 0.8rem 1rem;
        }

        .footer {
          display: flex;
          justify-content: flex-end;
          padding: 0.8rem 1rem;
          border-top: 1px solid #dedede;
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

        @media (min-width: 768px) {
          .modal-content {
            width: 50%;
          }
        }
      `
    ];
  }

  static get properties() {
    return {
      modalBackground: { type: String },
      alignWindow: { type: String }
    };
  }

  constructor() {
    super();
    this.modalBackground = this.modalBackground || 'rgba(0, 0, 0, .4)';
    this.alignWindow = this.alignWindow || 'flex-start';
  }

  firstUpdated() {
    this.modal = this.shadowRoot.querySelector('.modal');

    const content = this.shadowRoot.querySelector('.modal-content');

    this.modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.opacity = '0';
        this.style.backgroundColor = 'transparent';
        content.style.marginTop = '-50px';
        setTimeout(() => {
          this.className = 'modal closed';
          this.style.opacity = '1';
        }, 300);
      }
    });
  }

  openModal() {
    this.modal.className = 'modal';
    setTimeout(() => {
      this.modal.style.backgroundColor = this.modalBackground;
      this.shadowRoot.querySelector('.modal-content').style.marginTop = '20px';
    });
  }

  closeModal() {
    this.modal.style.backgroundColor = 'transparent';
    this.modal.style.opacity = '0';
    this.shadowRoot.querySelector('.modal-content').style.marginTop = '-50px';
    setTimeout(() => {
      this.modal.className = 'modal closed';
      this.modal.style.opacity = '1';
    }, 300);
  }

  render() {
    return html`
      <slot name="button" @click='${this.openModal}'></slot>
      <div class="modal closed" style="align-items: ${this.alignWindow}">
        <div class="modal-content">
          <div class="header">
            <slot name="title" class="title"></slot>
            <slot name="close-btn" @click="${this.closeModal}"></slot>
          </div>
          <slot name="content" class="content"></slot>
          <slot name="footer" class="footer"></slot>
        </div>
      </div>
    `;
  }
}
