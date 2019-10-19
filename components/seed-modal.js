import { LitElement, html, css } from 'lit-element';
import { seedButtonStyle } from '../styles';

export class SeedModal extends LitElement {
    static get styles() {
        return [
            seedButtonStyle,
            css`
                .modal {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;

                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;

                    background-color: transparent;
                    transition: background-color .3s;
                    color: black;
                    overflow: auto;
                    
                    z-index: 1;
                }

                .modal-content {
                    background-color: white;
                    width: 80%;
                    transition: margin-top .3s;
                    margin-top: -50px;
                }

                .content {
                    display: block;
                    padding: .8rem 1rem;
                }

                .closed {
                    display: none;
                    background-color: transparent;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: .8rem 1rem;
                }

                .footer {
                    display: flex;
                    justify-content: flex-end;
                    padding: .8rem 1rem;
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
        `]
    }

    static get properties() {
        return {
            modalBackground: { type: String }
        };
    }

    constructor() {
        super();
        this.modalBackground = this.modalBackground || 'rgba(0, 0, 0, .4)';
        this.background = 'red';
    }

    firstUpdated() {
        this.modal = this.shadowRoot.querySelector('.modal');

        const content = this.shadowRoot.querySelector('.modal-content');

        this.modal.addEventListener('click', function(e){
            if (e.target === this) {
                this.className = 'modal closed';
                this.style.backgroundColor = 'transparent';
                content.style.marginTop = '-50px';
            }
        });
    }

    openModal() {
        this.modal.className = 'modal';
        setTimeout(() => {
            this.modal.style.backgroundColor = this.modalBackground;
            this.shadowRoot.querySelector('.modal-content').style.marginTop = '20px';
        })
    }

    closeModal() {
        this.modal.className = 'modal closed';
        this.modal.style.backgroundColor = 'transparent';
        this.shadowRoot.querySelector('.modal-content').style.marginTop = '-50px';
    }

    render() {
        return html`
            <slot name="button" @click="${this.openModal}"></slot>
            <div class="modal closed">
                <div class="modal-content">
                    <div class="header">
                        <slot name="title" class="title"></slot>
                        <slot name="close-btn"></slot>
                    </div>
                    <slot name="content" class="content"></slot>
                    <slot name="footer" class="footer"></slot>
                </div>
            </div>
        `;
    }
}

window.customElements.define('seed-modal', SeedModal);
