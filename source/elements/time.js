import { Component, template } from '../../references/quantum.js';
import html from '../templates/time.js';

export class Time extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-time', Time);