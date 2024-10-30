import { log } from 'apify';

let initializedCounter = 0;

export class SomeClass {
    async initialize() {
        log.info(`Initialized ${initializedCounter++}`);
    }

    doStuff() {
        log.info(`Doing stuff`);
    }
}
