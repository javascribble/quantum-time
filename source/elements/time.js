import { Component, template, define } from '../import.js';
import html from '../templates/time.js';

export class Time extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-time', Time);