import html from '../templates/time.js';

export class Time extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-time', Time);