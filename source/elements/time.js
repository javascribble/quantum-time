import time from '../templates/time.js';

export class Time extends Quantum {
    constructor() {
        super();
    }
}

Time.define('quantum-time', time);