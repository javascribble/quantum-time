import html from '../templates/time.js';

const { Component, template, define } = quantum;

export class Time extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-time', Time);