import { LitElement, html } from 'lit-element';

class tutorials extends LitElement {
  contentSelect() {
    this.dispatchEvent(
      new CustomEvent('content-select', {
        detail: { title: 'sometitle' },
      })
    );
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul>
        <li
          class="cursor-default hover:underline"
          @click="${() => {
            this.contentSelect();
          }}"
        >
          &lt nothing yet... &gt
        </li>
        <li
          class="cursor-default hover:underline"
          @click="${() => {
            this.contentSelect();
          }}"
        >
          &lt nothing yet... &gt
        </li>
        <li
          class="cursor-default hover:underline"
          @click="${() => {
            this.contentSelect();
          }}"
        >
          &lt nothing yet... &gt
        </li>
      </ul>
    `;
  }
}

customElements.define('section-tutorials', tutorials);
