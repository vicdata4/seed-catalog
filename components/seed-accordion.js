import { LitElement, html } from 'lit-element';
import '../collapse';

export class SeedAccordion extends LitElement {
  render() {
    return html`
      <seed-collapse><slot></slot></seed-collapse>
    `;
  }
}
