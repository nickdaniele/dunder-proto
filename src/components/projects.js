import { LitElement, html } from 'lit-element';

class projects extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul>
        <li class="cursor-default hover:underline">&lt nothing yet... &gt</li>
        <li class="cursor-default hover:underline">&lt nothing yet... &gt</li>
        <li class="cursor-default hover:underline">&lt nothing yet... &gt</li>
      </ul>
    `;
  }
}

customElements.define('section-projects', projects);
