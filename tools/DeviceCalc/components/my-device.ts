import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-device')
export class MyDevice extends LitElement {
	override render() {
		return html`
			<div>Hello from MyElement!</div>
		`;
	}
}
